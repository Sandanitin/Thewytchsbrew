import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Psychic Readings',
            description: 'Connect with our experienced psychics for tarot, palmistry, and intuitive readings that offer guidance and clarity on your spiritual path.',
            icon: '🔮',
            action: 'Book a Session'
        },
        {
            title: 'Sound Healing',
            description: 'Experience deep relaxation and energetic alignment through our transformative sound healing sessions with crystal bowls and ancient instruments.',
            icon: '🔔',
            action: 'Join a Session'
        },
        {
            title: 'Witchcraft Workshops',
            description: 'Learn practical magic, spellcraft, and ritual techniques in our beginner-friendly workshops led by experienced practitioners.',
            icon: '✨',
            action: 'View Schedule'
        },
        {
            title: 'Chakra Balancing',
            description: 'Align your energy centers for optimal physical and emotional well-being using crystals, sound, and Reiki.',
            icon: '🌈',
            action: 'Book Session'
        },
        {
            title: 'Past Life Regression',
            description: 'Explore your soul\'s history to understand current patterns and heal old wounds in a safe, guided session.',
            icon: '🌀',
            action: 'Learn More'
        },
        {
            title: 'Herbal Consultations',
            description: 'Receive personalized herbal remedies and holistic health advice tailored to your specific constitution and spiritual needs.',
            icon: '🌿',
            action: 'Get Advice'
        }
    ];

    return (
        <section id="services" className="py-20 bg-mystic-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="section-title">Offerings</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="gothic-card group">
                            <div className="text-4xl mb-6 text-mystic-gold/80 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                            <h3 className="text-xl font-serif font-bold text-mystic-text mb-4 uppercase tracking-wider">{service.title}</h3>
                            <p className="text-mystic-text/70 mb-8 leading-relaxed font-light text-sm">{service.description}</p>
                            <button className="text-mystic-gold font-semibold uppercase tracking-widest text-xs hover:text-white transition-colors flex items-center gap-2 border-b border-transparent hover:border-mystic-gold pb-1">
                                {service.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
