import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/70 via-mystic-dark/50 to-mystic-dark z-10"></div>
                <img
                    src="/IMG_1135.JPEG"
                    alt="The Wytch's Brew Storefront"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-mystic-text mb-6 tracking-widest uppercase leading-tight">
                    <span className="block mb-2">The Wytch's Brew</span>
                    <span className="block text-2xl md:text-3xl font-sans font-light tracking-[0.2em] text-mystic-gold mt-4">A Metaphysical Haven</span>
                </h1>
                <p className="mt-8 max-w-2xl mx-auto text-lg text-mystic-text/80 font-light tracking-wide mb-12 italic">
                    "Where every cup is crafted with intention and every item carries a touch of magic."
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#services" className="btn-primary text-center">Spiritual Services</a>
                    <a href="#teas" className="btn-secondary text-center">Herbal Apothecary</a>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mystic-dark to-transparent z-20"></div>
        </div>
    );
};

export default Hero;
