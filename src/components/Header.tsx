import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarDays } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/360.png" alt="Dynamics360 Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">Home</a>
            <a href="#events" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">Events</a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-4">
              <a 
                href="#home" 
                className="text-gray-800 hover:text-indigo-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#events" 
                className="text-gray-800 hover:text-indigo-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#contact" 
                className="text-gray-800 hover:text-indigo-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;