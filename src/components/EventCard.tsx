import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { EventType } from '../types';

interface EventCardProps {
  event: EventType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
          {event.category}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.date}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.time}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>
        
        <button className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;