import React from 'react'
import { ArrowRight, MapPin, Calendar, Users, Award } from "lucide-react"
import projectImg from "../../assets/images/construction2.jpg"

const Projects = () => {
    const projects = [
        {
            title: "Modern Office Complex",
            description: "A state-of-the-art office building featuring sustainable design, smart building technology, and contemporary workspace solutions.",
            location: "Jakarta, Indonesia",
            year: "2024",
            category: "Commercial",
            image: projectImg,
            icon: Award,
        },
        {
            title: "Luxury Residential Villa",
            description: "Custom-built luxury villa with premium materials, panoramic views, and innovative architectural design elements.",
            location: "Bali, Indonesia", 
            year: "2023",
            category: "Residential",
            image: projectImg,
            icon: Award,
        },
        {
            title: "Industrial Warehouse",
            description: "Large-scale industrial facility designed for optimal logistics flow, energy efficiency, and modern manufacturing needs.",
            location: "Surabaya, Indonesia",
            year: "2023", 
            category: "Industrial",
            image: projectImg,
            icon: Award,
        },
    ]

    return (
        <section className="py-20 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold tracking-wider uppercase">Our Projects</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Discover our diverse range of{" "}
                        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                            projects
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        We offer a diverse array of construction services, spanning residential, commercial, and industrial projects
                        with unmatched expertise and quality.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-sky-200 cursor-pointer h-80"
                        >
                            {/* Project Image - Full Card */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={`${project.title} project`}
                                    width={400}
                                    height={320}
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
                                                <project.icon className="w-5 h-5 text-white" />
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
                                            <project.icon className="w-6 h-6 text-sky-400" />
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
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-sky-800 to-sky-900 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Our Work?</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Explore our complete portfolio and see how we can bring your construction vision to life with our proven expertise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                View All Projects
                            </button>
                            <button className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects