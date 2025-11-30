import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, ArrowRight } from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import heroBg from '../../assets/images/hero.jpg';
import { apiUrl } from '../common/http';



const Project = () => {
    const [projects, setProjects] = useState([]);

    async function fetchLatestProjects() {
        const res = await fetch(apiUrl + "get-projects", {
            'method': "GET",
        })
        const result = await res.json();
        setProjects(result)
    }

    useEffect(() => {
        fetchLatestProjects();
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroBg} alt="Construction site with cranes" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-blue-900/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold tracking-wider uppercase">Quality. Integrity. Value.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Our{" "}
                        <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-sky-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed">
                        We excel at transforming visions into reality through outstanding craftsmanship and precise attention to
                        detail.
                    </p>
                </div>
            </section>

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
                                        src={`http://localhost:8000/uploads/projects/${project.image}`}
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
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Project