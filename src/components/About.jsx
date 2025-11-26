const About = () => {
    return (
        <section id="about" className="py-20 bg-mystic-navy relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 border border-mystic-gold/20 transform translate-x-4 translate-y-4 z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
                            alt="Mystic Brews Interior"
                            className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-serif font-bold text-mystic-text mb-8 uppercase tracking-widest">Our Sanctuary</h2>
                        <div className="space-y-6 text-mystic-text/80 text-lg leading-relaxed font-light">
                            <p>
                                Mystic Brews began as a vision to create a space where the ancient wisdom of tea ceremony meets modern spiritual practices. Our teahouse is more than just a place to enjoy exceptional teas—it's a sanctuary for those seeking connection, healing, and transformation.
                            </p>
                            <p>
                                We carefully source our teas from ethical growers around the world and blend them with intention, creating unique infusions that support spiritual practice and wellbeing.
                            </p>
                            <p>
                                Our practitioners are experienced guides in their respective fields, offering authentic experiences in psychic readings, energy work, and magical practice in a welcoming, inclusive environment.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border border-white/10 p-6 hover:border-mystic-gold/30 transition-colors">
                                <h3 className="text-mystic-gold font-serif text-lg mb-2 uppercase tracking-wider">Intention</h3>
                                <p className="text-xs text-mystic-text/60 leading-relaxed">Every action, from brewing tea to reading cards, is done with mindful purpose.</p>
                            </div>
                            <div className="border border-white/10 p-6 hover:border-mystic-gold/30 transition-colors">
                                <h3 className="text-mystic-gold font-serif text-lg mb-2 uppercase tracking-wider">Community</h3>
                                <p className="text-xs text-mystic-text/60 leading-relaxed">We believe in the power of gathering to share stories, healing, and growth.</p>
                            </div>
                            <div className="border border-white/10 p-6 hover:border-mystic-gold/30 transition-colors">
                                <h3 className="text-mystic-gold font-serif text-lg mb-2 uppercase tracking-wider">Nature</h3>
                                <p className="text-xs text-mystic-text/60 leading-relaxed">We honor the earth and its cycles, sourcing ingredients that respect the planet.</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button className="btn-primary">Visit Us</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
