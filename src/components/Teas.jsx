import React from 'react';

const Teas = () => {
    const teaMenu = [
        {
            category: 'Organic Teas and Botanicals',
            icon: '🍃',
            items: [
                { name: 'Lavendar Mint' },
                { name: 'Tumeric Ginger' },
                { name: 'Blueberry Hibiscus-Rooibos' },
                { name: 'Jade Cloud' },
                { name: 'Rishi Valerian Dream' },
                { name: 'Yuzu Peach Green' },
                { name: 'Jasmine' },
                { name: 'English Breakfast' },
                { name: 'Chamomille Medley' },
                { name: 'Peppermint' },
                { name: 'Matcha Super Green' },
                { name: 'Early Grey' },
                { name: 'Elderberry Hibiscus Iced Tea' },
            ]
        },
        {
            category: 'Metaphysical Waters',
            icon: '💧',
            items: [
                { name: 'CBD Sparkling Water', desc: 'Calming infusions for energetic balance.' },
                { name: 'Infused Moon Water', desc: 'Charged under the full moon for intention setting.' },
            ]
        },
        {
            category: 'Sacred Sweets',
            icon: '🌙',
            items: [
                { name: 'Assorted Persian Desserts', desc: 'Traditional delicacies from the East.' },
                { name: 'Banana Magic Cookies', desc: 'Soft-baked comfort for the soul.' },
                { name: 'Pizelle Cookies', desc: 'Crisp, ornate traditional Italian treats.' },
            ]
        }
    ];

    return (
        <section id="teas" className="py-20 bg-mystic-navy relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Teas + More</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mb-16">
                    {/* Tea Jars Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="/tea-jars.png"
                            alt="Tea Jars Collection"
                            className="w-full h-[400px] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Tea Categories Grid */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teaMenu.map((cat, idx) => (
                            <div key={idx} className="relative p-6 border border-white/5 bg-mystic-dark/20 hover:border-mystic-gold/20 transition-all duration-700 group h-full">
                                <div className="text-2xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{cat.icon}</div>
                                <h3 className="text-lg font-serif font-bold text-mystic-text mb-6 uppercase tracking-widest border-b border-mystic-gold/10 pb-3">{cat.category}</h3>

                                <div className="space-y-4">
                                    {cat.items.map((item, i) => (
                                        <div key={i}>
                                            <h4 className="text-mystic-gold font-serif text-base mb-1">{item.name}</h4>
                                            {item.desc && <p className="text-mystic-text/50 text-xs italic leading-relaxed">{item.desc}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rishi Tea Brand Section */}
                <div className="mt-16 mb-16">
                    <div className="border border-mystic-gold/20 bg-gradient-to-br from-[#1a3a4a] to-[#0d2530] p-8 md:p-12">
                        {/* Logo and Header */}
                        <div className="flex flex-col items-center mb-12">
                            <img
                                src="/rishi-logo.png"
                                alt="Rishi Tea & Botanicals"
                                className="h-24 md:h-32 object-contain mb-6"
                            />
                            <p className="text-mystic-text/60 text-sm text-center italic max-w-2xl">
                                Proudly serving Rishi Tea & Botanicals — Direct Trade importers of premium, organic teas and botanicals from gardens across the world.
                            </p>
                        </div>

                        {/* Brand Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Certified Organic */}
                            <div className="text-center p-6 border border-white/5 bg-mystic-dark/30 hover:border-mystic-gold/20 transition-all duration-500">
                                <div className="text-3xl mb-4">🌿</div>
                                <h4 className="text-mystic-gold font-serif text-lg uppercase tracking-widest mb-4">Certified Organic</h4>
                                <p className="text-mystic-text/60 text-sm leading-relaxed">
                                    Organic teas are healthier for the planet and people who grow, craft and enjoy steeping them. That's why over 95% of Rishi's ingredients are certified organic.
                                </p>
                            </div>

                            {/* Direct Trade */}
                            <div className="text-center p-6 border border-white/5 bg-mystic-dark/30 hover:border-mystic-gold/20 transition-all duration-500">
                                <div className="text-3xl mb-4">🤝</div>
                                <h4 className="text-mystic-gold font-serif text-lg uppercase tracking-widest mb-4">Direct Trade</h4>
                                <p className="text-mystic-text/60 text-sm leading-relaxed">
                                    Ethically sourced directly from artisan tea and botanical farmers around the world. Deep relationships are the foundation of the authentic tea experiences you can expect from Rishi.
                                </p>
                            </div>

                            {/* Beautiful Ingredients */}
                            <div className="text-center p-6 border border-white/5 bg-mystic-dark/30 hover:border-mystic-gold/20 transition-all duration-500">
                                <div className="text-3xl mb-4">✨</div>
                                <h4 className="text-mystic-gold font-serif text-lg uppercase tracking-widest mb-4">Beautiful Ingredients</h4>
                                <p className="text-mystic-text/60 text-sm leading-relaxed">
                                    Rishi teas are inspired by equal parts: ancient herbal medicinal traditions and modern culinary innovation. Discover botanicals in exciting, fresh and artfully crafted blends.
                                </p>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mt-10 text-center">
                            <p className="text-mystic-gold/80 italic text-sm font-serif">
                                "Rishi sources ingredients for its passionately-crafted line of teas through direct trade with artisan growers. Their teas are an ode to the culinary and botanical arts, and you can taste the love."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <p className="text-mystic-text/60 text-sm uppercase tracking-[0.3em] font-serif mb-12 border-y border-mystic-gold/20 py-4 inline-block px-8">
                        Ask us about our flavored syrups
                    </p>
                    <div className="mt-8">
                        <p className="text-mystic-text/40 text-xs uppercase tracking-[0.2em] mb-8">Crafted with Intention</p>
                        <button className="btn-secondary">Visit Our Shop</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teas;
