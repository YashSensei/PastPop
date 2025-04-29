
import { useState, useEffect } from 'react';

export const useTodayEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoricalEvents = async () => {
      try {
        setLoading(true);
        const today = new Date();
        const month = today.getMonth() + 1; // getMonth() returns 0-11
        const day = today.getDate();
        
        // Using Wikipedia API to fetch events that happened on this day
        const response = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch historical events');
        }
        
        const data = await response.json();
        
        // Sort events by year (newest first) and limit to 10 events
        const sortedEvents = data.events
          .sort((a, b) => b.year - a.year)
          .slice(0, 10);
        
        setEvents(sortedEvents);
        setError(null);
      } catch (err) {
        console.error('Error fetching historical events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalEvents();
  }, []);

  return { events, loading, error };
};
