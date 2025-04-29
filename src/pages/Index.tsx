import React from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import Loader from '../components/Loader';
import { useTodayEvents } from '../hooks/useTodayEvents';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { events, loading, error } = useTodayEvents();
  const today = new Date();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          This Day in History
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          {format(today, 'MMMM d, yyyy')}
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="break-inside-avoid-column bg-[#F5F5DC] dark:bg-[#2A2A2A] p-6 rounded-lg 
                shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
                border border-gray-200 dark:border-gray-700 mb-6"
            >
              <div className="flex flex-col h-full">
                <div className="text-2xl font-bold text-primary mb-3">
                  {event.year}
                </div>
                <p className="text-gray-800 dark:text-gray-200 flex-grow">
                  {event.description}
                </p>
                {event.wikipedia && (
                  <a
                    href={event.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-primary hover:text-primary/80 
                      transition-colors duration-200 self-end"
                  >
                    Read more →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
