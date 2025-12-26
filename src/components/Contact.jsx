import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! The spirits have received it.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-mystic-dark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Contact the Coven</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-mystic-gold mb-4 uppercase tracking-widest">Visit Our Sanctuary</h3>
                            <p className="text-mystic-text/80 font-light leading-relaxed">
                                Step into our realm for a cup of tea, a tarot reading, or simply to find a moment of peace in the chaos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="text-mystic-gold mt-1">📍</div>
                                <div>
                                    <h4 className="font-bold text-mystic-text uppercase tracking-wider text-sm">Location</h4>
                                    <p className="text-mystic-text/60 font-light">757 Santa Fe Dr, Denver, Colorado 80204</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <h4 className="font-bold text-mystic-text uppercase tracking-wider text-sm mb-4">Sanctuary Hours</h4>
                            <ul className="space-y-2 text-mystic-text/60 font-light text-sm">
                                <li className="flex justify-between max-w-xs"><span>Monday</span> <span className="text-mystic-gold/80">CLOSED</span></li>
                                <li className="flex justify-between max-w-xs"><span>Tuesday</span> <span>8:00 AM - 8:00 PM</span></li>
                                <li className="flex justify-between max-w-xs"><span>Wednesday</span> <span>8:00 AM - 8:00 PM</span></li>
                                <li className="flex justify-between max-w-xs"><span>Thursday</span> <span>8:00 AM - 8:00 PM</span></li>
                                <li className="flex justify-between max-w-xs"><span>Friday</span> <span>8:00 AM - 8:00 PM</span></li>
                                <li className="flex justify-between max-w-xs"><span>Saturday</span> <span>8:00 AM - 8:00 PM</span></li>
                                <li className="flex justify-between max-w-xs"><span>Sunday</span> <span>8:00 AM - 8:00 PM</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-mystic-navy/30 p-8 rounded-xl border border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-mystic-muted mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-mystic-dark/50 border border-white/10 rounded px-4 py-3 text-mystic-text focus:outline-none focus:border-mystic-gold/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-mystic-muted mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-mystic-dark/50 border border-white/10 rounded px-4 py-3 text-mystic-text focus:outline-none focus:border-mystic-gold/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-mystic-muted mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-mystic-dark/50 border border-white/10 rounded px-4 py-3 text-mystic-text focus:outline-none focus:border-mystic-gold/50 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-mystic-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-mystic-dark/50 border border-white/10 rounded px-4 py-3 text-mystic-text focus:outline-none focus:border-mystic-gold/50 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
