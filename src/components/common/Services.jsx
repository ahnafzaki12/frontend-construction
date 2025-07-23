import { ArrowRight, Building, Home, Factory} from "lucide-react"
import serviceImg from "../../assets/images/construction1.jpg"

const Services = () => {
    const services = [
        {
            title: "Residential Construction",
            description:
                "Custom homes and residential projects built with precision, quality materials, and attention to detail that exceeds expectations.",
            icon: Home,
            image: serviceImg,
        },
        {
            title: "Commercial Building",
            description:
                "Office buildings, retail spaces, and commercial complexes designed for functionality, durability, and modern business needs.",
            icon: Building,
            image: serviceImg,
        },
        {
            title: "Industrial Projects",
            description:
                "Large-scale industrial facilities, warehouses, and manufacturing plants built to meet strict industry standards and regulations.",
            icon: Factory,
            image: serviceImg,
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50/30" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold tracking-wider uppercase">Our Services</span>
                    </div>

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-sky-200 cursor-pointer h-80"
                        >
                            {/* Service Image - Full Card */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={service.image || "/placeholder.svg"}
                                    alt={`${service.title} service`}
                                    width={400}
                                    height={320}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
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
                                            {service.description}
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
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h3>
                        <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
                            Get in touch with our expert team today for a free consultation and detailed project estimate.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Get Free Quote
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                View All Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services