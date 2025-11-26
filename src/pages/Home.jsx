import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Teas from '../components/Teas';
import Events from '../components/Events';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-mystic-dark min-h-screen text-mystic-text font-sans selection:bg-mystic-purple selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Teas />
                <Events />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
