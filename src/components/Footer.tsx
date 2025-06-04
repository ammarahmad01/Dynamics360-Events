import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, CalendarDays } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/360.png" alt="Dynamics360 Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              Connecting people through memorable events and experiences.
            </p>
            <div className="flex space-x-4">
             
              <a
                href="https://www.facebook.com/dynamics360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Facebook size={20} />
              </a>
              <a
                href="https://x.com/dynamics_360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/dynamics360/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/dynamics360/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Linkedin size={20} />
              </a>
            

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>404, 5th Floor, Golden Heights, Business Square, Block C, Gulberg Greens, Islamabad, Pakistan.</li>
              <li>+92 339 411 1994</li>
              <li>hr@dynamics360.net</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Dynamics360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;