import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '#services' },
        { name: 'Teas', path: '#teas' },
        { name: 'Events', path: '#events' },
        { name: 'About', path: '#about' },
        { name: 'Contact', path: '#footer' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-mystic-dark/95 border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-3 group">
                            <img 
                                src="/logo.png" 
                                alt="The Wytch's Brew Logo" 
                                className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
                            />
                            <span className="text-xl sm:text-2xl font-serif font-bold text-mystic-text tracking-wider">
                                The Wytch's Brew
                            </span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-mystic-text hover:text-mystic-gold px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-mystic-text hover:text-mystic-gold focus:outline-none p-2 rounded-md hover:bg-white/5 transition-colors"
                        >
                            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-mystic-dark/95 backdrop-blur-xl absolute w-full border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-mystic-text hover:text-mystic-gold hover:bg-white/5 uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
