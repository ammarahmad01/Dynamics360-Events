import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our events or want to organize your own? Contact us and we'll help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">hr@dynamics360.net</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
              <Phone className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+92 339 411 1994</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">404, 5th Floor, Golden Heights, Business Square, Block C, Gulberg Greens, Islamabad, Pakistan.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Abdullah"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="abdullah@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;