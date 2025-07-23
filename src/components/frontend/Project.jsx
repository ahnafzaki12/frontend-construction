import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import heroBg from '../../assets/images/hero.jpg';
import Projects from '../common/Projects';


const Project = () => {
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
            <Projects />
            <Footer />
        </div>
    )
}

export default Project