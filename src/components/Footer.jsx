import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMoon } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="bg-mystic-dark text-mystic-text border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">☕</span>
                            <h3 className="text-2xl font-serif font-bold text-mystic-text tracking-wider">The Wytch's Brew</h3>
                        </div>
                        <p className="text-mystic-text/60 text-sm leading-relaxed mb-6 font-light">
                            A sanctuary for the modern witch. Tea, tarot, and transformation in the heart of the city.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-mystic-text hover:text-mystic-gold transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-mystic-text hover:text-mystic-gold transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-mystic-text hover:text-mystic-gold transition-colors"><FaTwitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-mystic-gold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><a href="#services" className="text-mystic-text/70 hover:text-mystic-gold transition-colors uppercase tracking-wide">Services</a></li>
                            <li><a href="#teas" className="text-mystic-text/70 hover:text-mystic-gold transition-colors uppercase tracking-wide">Apothecary</a></li>
                            <li><a href="#events" className="text-mystic-text/70 hover:text-mystic-gold transition-colors uppercase tracking-wide">Gatherings</a></li>
                            <li><a href="#about" className="text-mystic-text/70 hover:text-mystic-gold transition-colors uppercase tracking-wide">Our Story</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-mystic-gold uppercase tracking-widest mb-6">Visit</h4>
                        <ul className="space-y-4 text-sm text-mystic-text/70 font-light">
                            <li className="leading-relaxed">
                                123 Moonlit Avenue<br />
                                Salem, MA 01970
                            </li>
                            <li>(555) 123-4567</li>
                            <li>hello@thewytchsbrew.com</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-sm font-bold text-mystic-gold uppercase tracking-widest mb-6">Hours</h4>
                        <ul className="space-y-4 text-sm text-mystic-text/70 font-light">
                            <li className="flex justify-between"><span>Mon - Fri</span> <span>10am - 8pm</span></li>
                            <li className="flex justify-between"><span>Sat</span> <span>11am - 9pm</span></li>
                            <li className="flex justify-between"><span>Sun</span> <span>11am - 6pm</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs text-mystic-text/40 uppercase tracking-widest font-light">
                    <p>&copy; {new Date().getFullYear()} The Wytch's Brew. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
