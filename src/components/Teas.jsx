import React from 'react';

const Teas = () => {
    const teaMenu = [
        {
            category: 'Hand-Blended Teas',
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

                <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
                    <div className="lg:w-1/3">
                        <img
                            src="/IMG_1137.JPEG"
                            alt="Mystical Apothecary"
                            className="w-full h-[400px] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teaMenu.map((cat, idx) => (
                            <div key={idx} className="relative p-8 border border-white/5 bg-mystic-dark/20 hover:border-mystic-gold/20 transition-all duration-700 group">
                                <div className="text-3xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{cat.icon}</div>
                                <h3 className="text-xl font-serif font-bold text-mystic-text mb-8 uppercase tracking-widest border-b border-mystic-gold/10 pb-4">{cat.category}</h3>

                                <div className="space-y-6">
                                    {cat.items.map((item, i) => (
                                        <div key={i}>
                                            <h4 className="text-mystic-gold font-serif text-lg mb-1">{item.name}</h4>
                                            {item.desc && <p className="text-mystic-text/50 text-xs italic leading-relaxed">{item.desc}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
