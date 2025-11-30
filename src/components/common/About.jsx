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
                        <div className="pt-2">
                            <a
                                href="/about-us"
                                className="group relative inline-flex items-center rounded-full py-3 pr-8 pl-1 gap-3 transition-all duration-500 ease-in-out hover:pr-12"
                            >
                                <span className="absolute left-0 top-0 bottom-0 w-12 rounded-full bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>

                                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="currentColor"
                                        className="h-5 w-5 text-white transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                <span className="relative z-10 whitespace-nowrap text-xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-white group-hover:delay-75">
                                    Our Vision, Values & Commitments
                                </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="absolute right-5 z-10 h-5 w-5 translate-y-0 text-white opacity-0 transition-all duration-500 ease-in-out -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;