import React from 'react';

const Teas = () => {
    const teas = [
        {
            name: 'Moonlight Meditation',
            description: 'A calming blend of chamomile, lavender, and mugwort for dreamwork and intuition.',
            image: '/tea_calming.png'
        },
        {
            name: 'Psychic Awakening',
            description: 'Enhance your intuition with this blend of yerba mate, peppermint, and clary sage.',
            image: '/tea_energy.png'
        },
        {
            name: 'Protection Potion',
            description: 'A grounding blend of black tea, cinnamon, and rosemary for energetic shielding.',
            image: '/tea_forest.png'
        },
        {
            name: 'Love & Manifestation',
            description: 'Attract positive energy with this rose, hibiscus, and orange peel infusion.',
            image: '/tea_energy.png'
        },
        {
            name: 'Divination Delight',
            description: 'A blend to open the third eye with mugwort, jasmine, and star anise.',
            image: '/tea_calming.png'
        },
        {
            name: 'Forest Spirit',
            description: 'Connect with nature using this pine needle, juniper berry, and nettle infusion.',
            image: '/tea_forest.png'
        },
        {
            name: 'Golden Aura',
            description: 'Radiate positivity with turmeric, ginger, and lemon balm.',
            image: '/tea_energy.png'
        },
        {
            name: 'Shadow Work',
            description: 'Support deep inner work with elderberry, valerian root, and dark chocolate nibs.',
            image: '/tea_calming.png'
        }
    ];

    return (
        <section id="teas" className="py-20 bg-mystic-navy relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Apothecary</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teas.map((tea, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="h-64 overflow-hidden relative mb-4 border border-white/5">
                                <img
                                    src={tea.image}
                                    alt={tea.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-serif font-bold text-mystic-text mb-1 uppercase tracking-wider">{tea.name}</h3>
                                <p className="text-mystic-text/60 text-xs mb-3 h-12 overflow-hidden leading-relaxed">{tea.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="btn-secondary">View All Blends</button>
                </div>
            </div>
        </section>
    );
};

export default Teas;
