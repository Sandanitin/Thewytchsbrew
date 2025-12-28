const About = () => {
    return (
        <section id="about" className="py-20 bg-mystic-navy relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Us Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 border border-mystic-gold/20 transform translate-x-4 translate-y-4 z-0"></div>
                        <img
                            src="/IMG_1134.JPEG"
                            alt="The Wytch's Brew Sanctuary"
                            className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-serif font-bold text-mystic-text mb-8 uppercase tracking-widest">Our Sanctuary</h2>
                        <div className="space-y-6 text-mystic-text/80 text-lg leading-relaxed font-light">
                            <p>
                                Welcome to <span className="text-mystic-gold font-serif">The Wytch’s Brew</span>, a cozy tea room and metaphysical haven where every cup is crafted with intention and every item carries a touch of magic.
                            </p>
                            <p>
                                Rooted in herbal wisdom and old-world mysticism, our space offers hand-blended teas, crystals, herbs, divination tools, and spiritual goods selected to support grounding, clarity, and intuitive growth.
                            </p>
                            <p>
                                Created for seekers, dreamers, and anyone looking for a moment of peace, our doors are open and the kettle is always on. Step inside, sip something spellbinding, and find connection between the realms.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border border-white/10 p-6 bg-mystic-dark/30 hover:border-mystic-gold/30 transition-colors">
                                <h3 className="text-mystic-gold font-serif text-lg mb-2 uppercase tracking-wider">Grounded</h3>
                                <p className="text-xs text-mystic-text/60 leading-relaxed">Find your center through our selection of herbal blends and minerals.</p>
                            </div>
                            <div className="border border-white/10 p-6 bg-mystic-dark/30 hover:border-mystic-gold/30 transition-colors">
                                <h3 className="text-mystic-gold font-serif text-lg mb-2 uppercase tracking-wider">Clarity</h3>
                                <p className="text-xs text-mystic-text/60 leading-relaxed">Divination tools and readings to light your path forward.</p>
                            </div>
                            <div className="border border-white/10 p-6 bg-mystic-dark/30 hover:border-mystic-gold/30 transition-colors">
                                <h3 className="text-mystic-gold font-serif text-lg mb-2 uppercase tracking-wider">Growth</h3>
                                <p className="text-xs text-mystic-text/60 leading-relaxed">Workshops and sessions designed for your intuitive evolution.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MaeWytch & Robert Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/5 pt-24">
                    {/* Mae */}
                    <div className="relative group">
                        <div className="aspect-[4/5] overflow-hidden mb-8 relative border border-white/5">
                            <img
                                src="/mae-wytch.jpg"
                                alt="Mae - Owner"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-mystic-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-mystic-text mb-2 uppercase tracking-widest">Mae</h2>
                        <h3 className="text-mystic-gold font-serif text-lg mb-6 italic">Owner & Natural Born Mage</h3>
                        <div className="space-y-4 text-mystic-text/70 text-sm leading-relaxed font-light">
                            <p>
                                A natural born mage who has practiced the craft for over 20 years with a deep pull towards the occult. She brews teas and potions with lots of love.
                            </p>
                            <p>
                                Currently pursuing her Masters in Mindfulness-Based Transpersonal Counseling at Naropa University, Mae began her journey understanding the mind at age 9 through transcendental meditation. At 18, she became CELTA certified through Cambridge and taught English as a foreign language in the Middle East. At 23, she earned her Bachelor's in History from CU Denver.
                            </p>
                            <p>
                                Today, she uses her knowledge from the East and West to help those around her attain spiritual, emotional, and physical healing. She offers readings, guided meditations, and knot magick to those who come seeking guidance.
                            </p>
                        </div>
                    </div>

                    {/* Robert Herzberg */}
                    <div className="relative group lg:mt-24">
                        <div className="aspect-[4/5] overflow-hidden mb-8 relative border border-white/5">
                            <img
                                src="/robert-herzberg.jpg"
                                alt="Robert Herzberg"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-mystic-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-mystic-text mb-2 uppercase tracking-widest">Robert Herzberg</h2>
                        <h3 className="text-mystic-gold font-serif text-lg mb-6 italic">Sound Healing Practitioner</h3>
                        <div className="space-y-4 text-mystic-text/70 text-sm leading-relaxed font-light">
                            <p>
                                aka Tricky Bobby, Robert is continuing formal training and working toward certification through the Atma Buti® School of Sound & Vibration.
                            </p>
                            <p>
                                He offers heart-centered sessions using traditional Himalayan sound healing methods to restore clarity and inner harmony.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
