import React from 'react';
import AboutImg from "../../assets/images/about-us.jpg"

const About = () => {

    return (
        <section className="py-20 bg-white" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={AboutImg}
                            alt="Construction workers building modern structure"
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                        />
                        
                        {/* Simple stats overlay */}
                        <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                            <p className="text-2xl font-bold text-gray-900">25+</p>
                            <p className="text-sm text-gray-600">Years Experience</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        {/* Simple badge */}
                        <div className="inline-block">
                            <span className="text-slate-600 text-xl font-medium uppercase tracking-wider">About Us</span>
                        </div>

                        {/* Main heading */}
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Crafting structures that{" "}
                            <span className="text-blue-600">last a lifetime</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Building enduring structures requires a comprehensive approach that combines advanced materials, resilient
                            design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing
                            modern technology, we create buildings that stand the test of time.
                        </p>

                        {/* Simplified features */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">Quality materials from trusted suppliers</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">Expert team with decades of experience</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">Projects completed on schedule</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">Dedicated to exceeding expectations</span>
                            </div>
                        </div>

                        {/* Simple CTA */}
                        <div className="pt-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;