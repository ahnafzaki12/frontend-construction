import React, { useEffect, useState, useRef, useCallback } from 'react'
import { ArrowRight, MapPin, Calendar, Users, Award } from "lucide-react"

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

function ProjectCard({ project, index }) {
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
            {/* Project Image - Full Card */}
            <div className="relative w-full h-full overflow-hidden">
                <LazyImage
                    src={`http://localhost:8000/uploads/projects/${project.image}`}
                    alt={`${project.title} project`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end">
                    <div className="p-6 w-full">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-4 text-slate-300 text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <Award className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-sky-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                </div>

                {/* Hover Overlay with Description */}
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                    <div className="text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 bg-sky-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Award className="w-6 h-6 text-sky-400" />
                        </div>

                        <div className="bg-sky-500/20 backdrop-blur-sm text-sky-300 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-2">
                            {project.category}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">
                            {project.title}
                        </h3>

                        <div className="flex items-center justify-center gap-4 text-slate-300 text-sm mb-3">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{project.year}</span>
                            </div>
                        </div>

                        <p className="text-slate-200 leading-relaxed text-sm">
                            {project.description}
                        </p>

                        <div className="pt-2">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                View Project
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLatestProjects = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await fetch("http://localhost:8000/api/get-latest-projects?limit=3", {
                method: "GET",
            });

            if (!res.ok) {
                throw new Error('Failed to fetch projects');
            }

            const result = await res.json();
            setProjects(result);
            setError(null);
        } catch (err) {
            console.error('Error fetching projects:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLatestProjects();
    }, [fetchLatestProjects]);

    return (
        <section className="py-10 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center max-w-screen mb-12">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mr-auto">
                        Featured Projects
                    </h2>

                    <button className="border-2 mt-5 border-white text-sky-600 hover:underline cursor-pointer px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                        View All Projects
                    </button>
                </div>



                {/* Projects Grid */}
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
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <p className="text-red-500 mb-4 font-semibold">Failed to load projects</p>
                        <p className="text-slate-600 mb-6 text-sm">{error}</p>
                        <button
                            onClick={fetchLatestProjects}
                            className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors font-semibold"
                        >
                            Try Again
                        </button>
                    </div>
                ) : projects.length > 0 ? (
                    // Projects Grid
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id || index} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                            <Award className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-500 font-semibold mb-2">No projects available</p>
                        <p className="text-slate-400 text-sm">Check back later for our latest work.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects