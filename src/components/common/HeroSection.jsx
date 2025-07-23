import heroBg from '../../assets/images/hero.jpg';

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  .animate-slide-up {
    animation: slideUp 1s ease-out 0.2s both;
  }
  .animate-slide-up-delay {
    animation: slideUp 1s ease-out 0.4s both;
  }
  .animate-fade-in-delay {
    animation: fadeIn 1s ease-out 0.6s both;
  }
`

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <style>{styles}</style>

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Construction cranes against blue sky"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Enhanced gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Welcome badge with improved contrast */}
                <span className="inline-block bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-300 text-sm sm:text-base font-semibold tracking-wider uppercase mb-6 px-4 py-2 rounded-full animate-fade-in">
                    Welcome Amazing Constructions
                </span>

                {/* Main heading with enhanced typography hierarchy */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                    <span className="text-white drop-shadow-2xl">Crafting dreams with</span>
                    <span className="block mt-2 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                        precision and excellence.
                    </span>
                </h1>

                {/* Description with improved readability */}
                <p className="text-xl sm:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay font-light">
                    We excel at transforming visions into reality through outstanding craftsmanship and precise attention to
                    detail.
                </p>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay">
                    <button className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-sky-500/25 border border-sky-400/20">
                        <span className="flex items-center gap-2">
                            View Our Projects
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
                    <button className="group border-2 border-slate-300/80 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl">
                        <span className="flex items-center gap-2">
                            Contact Us
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
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-300 animate-fade-in-delay">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        <span className="text-sm font-medium">25+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        <span className="text-sm font-medium">500+ Projects Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        <span className="text-sm font-medium">Licensed & Insured</span>
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-sky-300/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
                    <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
