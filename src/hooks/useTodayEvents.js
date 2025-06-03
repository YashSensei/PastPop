import { useState, useEffect } from 'react';

export const useTodayEvents = () => {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(20); // Show 20 events initially

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
        
        // Sort events by year (newest first)
        const sortedEvents = data.events.sort((a, b) => b.year - a.year);
        setAllEvents(sortedEvents);
        setEvents(sortedEvents.slice(0, displayCount));
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

  const loadMore = () => {
    const newCount = displayCount + 20;
    setDisplayCount(newCount);
    setEvents(allEvents.slice(0, newCount));
  };

  const hasMore = events.length < allEvents.length;

  return { events, loading, error, loadMore, hasMore };
};
