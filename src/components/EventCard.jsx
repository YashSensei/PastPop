
import React from 'react';

const EventCard = ({ event, index }) => {
  const delayClass = index <= 2 
    ? `animate-fade-in-delay-${index + 1}` 
    : 'animate-fade-in-delay-3';

  return (
    <div 
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-border ${delayClass}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {event.year}
        </span>
        <div className="bg-secondary text-xs font-medium text-muted-foreground px-2.5 py-0.5 rounded-full">
          {Math.abs(event.year)} {event.year < 0 ? 'BCE' : 'CE'}
        </div>
      </div>
      
      <h3 className="font-medium text-lg mb-2">{event.description}</h3>
      
      {event.wikipedia && event.wikipedia.length > 0 && (
        <div className="mt-4">
          <a 
            href={event.wikipedia[0].wikipedia} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-accent underline hover:no-underline transition-all"
          >
            Learn more
          </a>
        </div>
      )}
    </div>
  );
};

export default EventCard;
