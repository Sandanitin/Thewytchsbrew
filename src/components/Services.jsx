import React from 'react';

const Services = () => {
    const serviceCategories = [
        {
            category: 'Tarot & Divination',
            tagline: 'By Appointment Only',
            icon: '🔮',
            items: [
                { name: 'Mini 3-Card Reading', price: '$11', desc: 'Quick clarity pull for fast insight and energetic check-ins.' },
                { name: 'Past–Present–Future', price: '$22', desc: 'Reveals the story behind, the truth within, and the path ahead.' },
                { name: '6-Card Deep Dive', price: '$33', desc: 'Exploring influences, blocks, choices, and overall direction.' },
                { name: 'Relationship Reading', price: '$33', desc: 'Clarity on feelings, intentions, and potential outcomes.' },
                { name: 'Career & Life Path', price: '$33', desc: 'Guidance for direction, purpose, and next steps.' },
                { name: '12-Month Forecast', price: '$44', desc: 'A month-by-month look into the year ahead.' },
            ]
        },
        {
            category: 'Sound Healing',
            tagline: 'Vibrational Medicine',
            icon: '🔔',
            items: [
                { name: 'In-Store Sound Massage', price: '$2.22/min', desc: 'Himalayan Singing Bowls session (5-40 mins).' },
                { name: '1:1 & Group Sound Baths', price: '$2.22/min', desc: 'Immersive vibrational experiences at your location.' },
                { name: 'Travel Fee', price: '$0.50/min', desc: 'Travel time (up to 30 miles from our shop).' },
                { name: 'After-Party Decompress', price: 'Custom', desc: '3-hour restoration for events, weddings, and retreats.' },
            ]
        },
        {
            category: 'Meditation',
            tagline: 'Inner Stillness',
            icon: '✨',
            items: [
                { name: 'Mindfulness-Based', price: '$15', desc: '45-minute guide into the present moment.' },
                { name: 'Transcendental-Based', price: '$25', desc: '45-minute journey beyond everyday thought.' },
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-mystic-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="section-title">Sacred Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="gothic-card flex flex-col h-full border-mystic-gold/10">
                            <div className="text-4xl mb-4 text-mystic-gold/80">{cat.icon}</div>
                            <h3 className="text-2xl font-serif font-bold text-mystic-text mb-1 uppercase tracking-wider">{cat.category}</h3>
                            <p className="text-mystic-gold/60 text-xs uppercase tracking-widest mb-8 font-semibold italic">{cat.tagline}</p>

                            <div className="space-y-8 flex-grow">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="text-mystic-text font-serif text-lg group-hover:text-mystic-gold transition-colors">{item.name}</h4>
                                            <span className="text-mystic-gold font-sans text-sm font-bold ml-4">{item.price}</span>
                                        </div>
                                        <p className="text-mystic-text/50 text-xs leading-relaxed italic">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-12 w-full py-3 border border-mystic-gold/20 text-mystic-gold hover:bg-mystic-gold hover:text-mystic-dark transition-all duration-500 uppercase tracking-widest text-xs font-bold">
                                Reserve Session
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-mystic-text/60 italic text-sm">
                        * All readings and private sessions are by appointment only. Travel fees apply for off-site sound meditations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
