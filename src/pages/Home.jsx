import React, { useState, useEffect, useCallback } from 'react';


const slides = [
    { 
        title: "Rolex Oyster Perpetual", 
        subtitle: "Timeless elegance and precision engineering since 1926.", 
        imageUrl: "/image2.png", 
        buttonText: "View Details" 
    },
    { 
        title: "Omega Seamaster Diver", 
        subtitle: "The professional diver's choice, built for the depths.", 
        imageUrl: "/image3.png", 
        buttonText: "Shop Seamaster" 
    },
    { 
        title: "Cartier Santos De Cartier", 
        subtitle: "The original pilot's watch, a masterpiece of form and function.", 
        imageUrl: "/image4.png", 
        buttonText: "Explore Collection" 
    },
    { 
        title: "Patek Philippe Calatrava", 
        subtitle: "Pinnacle of minimalist design and high horology.", 
        imageUrl: "/image1.png",
        buttonText: "Discover Patek" 
    },
    { 
        title: "Breitling Navitimer", 
        subtitle: "The legendary watch for pilots and aviation enthusiasts.", 
        imageUrl: "/image8.png", 
        buttonText: "Learn More" 
    },
];


const getOffset = (index, current, total) => {
    let offset = index - current;
    if (offset > total / 2) {
        offset -= total;
    } else if (offset < -total / 2) {
        offset += total;
    }
    return offset;
};


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, [totalSlides]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    const neonGlow = {
        boxShadow: '0 0 10px rgba(252, 211, 77, 0.8), 0 0 20px rgba(252, 211, 77, 0.6), 0 0 40px rgba(252, 211, 77, 0.4)',
        borderColor: '#e69138', // yellow-500
    };

    const getStyles = (index) => {
        const offset = getOffset(index, currentSlide, totalSlides);
        const absOffset = Math.abs(offset);
        const direction = Math.sign(offset);

        const isCenter = absOffset === 0;

        if (absOffset > 2) {
            return {
                zIndex: 0,
                opacity: 0,
                transform: `translate3d(${direction * 150}%, 0, -100px) scale(0.5)`,
                pointerEvents: 'none',
            };
        }

        const zIndex = 50 - absOffset;
        const scale = 1 - absOffset * 0.15; // 1.0, 0.85, 0.70
        const opacity = 1 - absOffset * 0.35; // 1.0, 0.65, 0.30

        let translateX = 0;
        if (absOffset === 1) {
            translateX = direction * 40; 
        } else if (absOffset === 2) {
            translateX = direction * 70; 
        }

        return {
            opacity,
            zIndex,
            transform: `translate3d(calc(${translateX}%), 0, ${-absOffset * 80}px) scale(${scale})`,
            pointerEvents: isCenter ? 'auto' : 'none', // Only the center slide is clickable
        };
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden relative">
            <style>
                {`
                .slider-container {
                    perspective: 1500px;
                }
                .slide-card {
                    transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out, box-shadow 0.7s ease-in-out;
                }
                `}
            </style>

            <div className="slider-container relative w-full h-[500px] md:h-[700px] max-w-7xl mx-auto flex items-center justify-center">
                
                {slides.map((slide, index) => {
                    const isCenter = index === currentSlide;
                    const dynamicStyles = getStyles(index);

                    return (
                        <div 
                            key={index} 
                            className={`slide-card absolute w-1/2 md:w-2/5 aspect-video flex-shrink-0 rounded-[30px] border-4 border-transparent bg-cover bg-center overflow-hidden`}
                            style={{ 
                                backgroundImage: `url(${slide.imageUrl})`,
                                ...dynamicStyles,
                                ...(isCenter ? neonGlow : {}), 
                                minWidth: '280px', 
                            }}
                        >
                            <div className={`absolute inset-0 bg-black/70 backdrop-blur-[4px] flex flex-col justify-center items-center text-center p-8 transition duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-sm md:text-lg text-gray-300 max-w-sm mb-6 drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <button className="px-5 py-2 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    );
                })}

                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 p-3 z-50 bg-white/10 text-white rounded-full transition hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-yellow-500"
                    aria-label="Previous Slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 p-3 z-50 bg-white/10 text-white rounded-full transition hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-yellow-500"
                    aria-label="Next Slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index ? 'bg-yellow-500 scale-125 shadow-lg shadow-yellow-500/50' : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Home;