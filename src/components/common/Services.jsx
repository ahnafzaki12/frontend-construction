import { ArrowRight, Building, Home, Factory } from "lucide-react"
import { useEffect, useState, useRef, useCallback } from "react"

function LazyImage({ src, alt, className }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "50px",
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <div ref={imgRef} className="w-full h-full">
            {/* Skeleton Loading */}
            {!isLoaded && (
                <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse"></div>
            )}

            {/* Actual Image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                    onLoad={() => setIsLoaded(true)}
                    loading="lazy"
                />
            )}
        </div>
    );
}

function ServiceCard({ service, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    return (
        <div
            ref={cardRef}
            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-sky-200 cursor-pointer h-80 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            {/* Service Image - Full Card */}
            <div className="relative w-full h-full overflow-hidden">
                {service.image && (
                    <LazyImage
                        src={`http://localhost:8000/uploads/services/${service.image}`}
                        alt={`${service.title} service`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}

                {/* Default Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end">
                    <div className="p-6 w-full">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">
                                {service.title}
                            </h3>
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <Home className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hover Overlay with Description */}
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                    <div className="text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 bg-sky-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Building className="w-6 h-6 text-sky-400" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            {service.title}
                        </h3>

                        <p className="text-slate-200 leading-relaxed text-sm">
                            {service.short_desc}
                        </p>

                        <div className="pt-2">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                Read More
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Services() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLatestServices = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await fetch('http://localhost:8000/api/get-latest-services?limit=3', {
                method: "GET",
            });

            if (!res.ok) {
                throw new Error('Failed to fetch services');
            }

            const result = await res.json();
            setServices(result);
            setError(null);
        } catch (err) {
            console.error('Error fetching services:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLatestServices();
    }, [fetchLatestServices]);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50/30" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Our construction{" "}
                        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                            services
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        We offer a diverse array of construction services, spanning residential, commercial, and industrial projects
                        with unmatched expertise and quality.
                    </p>
                </div>

                {/* Services Grid */}
                {isLoading ? (
                    // Loading Skeleton
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/50 h-80 animate-pulse"
                            >
                                <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    // Error State
                    <div className="text-center py-12">
                        <p className="text-red-500 mb-4">Failed to load services: {error}</p>
                        <button
                            onClick={fetchLatestServices}
                            className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                ) : services.length > 0 ? (
                    // Services Grid
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id || index} service={service} index={index} />
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="text-center py-12">
                        <p className="text-slate-500">No services available at the moment.</p>
                    </div>
                )}

                {/* Bottom CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <button className="border-2 border-white text-sky-600 hover:bg-sky-200 hover:text-sky-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services