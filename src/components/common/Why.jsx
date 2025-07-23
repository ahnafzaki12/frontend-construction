import React from 'react'
import { Award, Users, Clock, Star, CheckCircle } from 'lucide-react';
import icon1 from "../../assets/images/icon-1.svg"
import icon2 from "../../assets/images/icon-2.svg"
import icon3 from "../../assets/images/icon-3.svg"

const Why = () => {
    const features = [
        {
            icon: icon1,
            title: "Cutting-Edge Solutions",
            description:
                "Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.",
            stats: "98% Safety Record",
        },
        {
            icon: icon2,
            title: "Expert Craftsmanship",
            description:
                "Our skilled professionals bring decades of experience and precision to every project, ensuring superior quality and attention to detail.",
            stats: "25+ Years Experience",
        },
        {
            icon: icon3,
            title: "Quality Assurance",
            description:
                "Rigorous quality control processes and premium materials ensure that every project meets the highest standards of excellence and durability.",
            stats: "100% Quality Guarantee",
        },
    ]

    const achievements = [
        { icon: Award, number: "500+", label: "Projects Completed" },
        { icon: Users, number: "250+", label: "Happy Clients" },
        { icon: Clock, number: "25+", label: "Years Experience" },
        { icon: Star, number: "4.9", label: "Client Rating" },
    ]

    return (
        <section className="py-20 bg-white" id="why">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-400/20 text-sky-700 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Discover our wide variety of{" "}
                        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                            projects.
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        Created in close partnership with our clients and collaborators, this approach merges industry expertise,
                        decades of experience, innovation, and flexibility to consistently deliver excellence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-slate-50 to-sky-50/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-sky-200 relative overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10 space-y-6">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <img
                                        src={feature.icon || "/placeholder.svg"}
                                        alt={feature.title}
                                        width={32}
                                        height={32}
                                        className="filter invert"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>

                                    {/* Stats badge */}
                                    <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        <CheckCircle className="w-4 h-4" />
                                        {feature.stats}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Next Project?</h3>
                        <p className="text-slate-600 mb-8">
                            Join hundreds of satisfied clients who have trusted us with their construction needs. Let's build
                            something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25">
                                <span className="flex items-center justify-center gap-2">
                                    Start Your Project
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <button className="group border-2 border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                <span className="flex items-center justify-center gap-2">
                                    View Our Portfolio
                                    <svg
                                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why