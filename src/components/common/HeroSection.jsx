import { useState } from 'react';
import heroBg from '../../assets/images/hero2.jpeg';


const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
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
  .animate-slide-in-right {
    animation: slideInRight 1s ease-out 0.6s both;
  }
  .card-slider {
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .card-slider::-webkit-scrollbar {
    display: none;
  }
`;

const cardData = [
    {
        id: 1,
        title: "Building Excellence Through Innovation",
        description: "Delivering exceptional construction projects that stand the test of time with our commitment to excellence.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        title: "Sustainable Architecture for Modern Living Spaces",
        description: "Creating eco-friendly structures that harmonize with nature while providing ultimate comfort and functionality.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Infrastructure Development That Connects Communities",
        description: "Building bridges, roads, and facilities that bring people together and drive economic growth, while ensuring sustainability.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
    }
];

const HeroSection = () => {
    const [currentCard, setCurrentCard] = useState(0);

    const nextCard = () => {
        setCurrentCard((prev) => (prev + 1) % cardData.length);
    };

    const prevCard = () => {
        setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
    };

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
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                            <span className="text-white drop-shadow-2xl">Crafting dreams with</span>
                            <br />
                            <span className="text-white drop-shadow-2xl">precision and excellence.</span>
                        </h1>

                        <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 mb-10 max-w-2xl leading-relaxed animate-slide-up-delay font-light">
                            We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.
                        </p>
                    </div>

                    {/* Right Card Slider */}
                    <div className="w-full lg:w-80 lg:mt-24 animate-slide-in-right relative">

                        {/* --- NAVIGATION ARROWS (DIJAUHKAN) --- */}

                        {/* Tombol Kiri: Diubah dari -translate-x-3 menjadi -translate-x-12 */}
                        <button
                            onClick={prevCard}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group"
                            aria-label="Previous card"
                        >
                            <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Tombol Kanan: Diubah dari translate-x-3 menjadi translate-x-12 */}
                        <button
                            onClick={nextCard}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group"
                            aria-label="Next card"
                        >
                            <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* --- END NAVIGATION ARROWS --- */}

                        {/* Card Container */}
                        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-white">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentCard * 100}%)` }}
                            >
                                {cardData.map((card) => (
                                    <div key={card.id} className="w-full flex-shrink-0">
                                        <div className="bg-white overflow-hidden">
                                            {/* Card Image */}
                                            <div className="relative h-40 bg-gradient-to-br from-blue-500 to-blue-700">
                                                <img
                                                    src={card.image}
                                                    alt={`Project ${card.id}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-5 pb-12">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                                    {card.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {card.description}
                                                </p>

                                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Indicator Dots */}
                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                                {cardData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentCard(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${currentCard === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Go to card ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;