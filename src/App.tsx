import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { events } from './data/events';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="fixed inset-0 bg-indigo-600 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            <p className="mt-4 text-white font-medium">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <EventsSection events={events} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;