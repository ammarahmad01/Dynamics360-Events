import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Events Near You
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Find and attend the best events in your area. Connect with like-minded professionals
            and expand your network.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#events" 
              className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-200"
            >
              Explore Events
            </a>
            <a 
              href="#contact" 
              className="inline-block bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#events" className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;