
import React from 'react';
import { Calendar } from 'lucide-react';

const Header = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="mb-8 text-center">
      <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2 animate-fade-in">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{formattedDate}</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-700 bg-clip-text text-transparent animate-fade-in-delay-1">
        PastPop
      </h1>
      <p className="text-muted-foreground mt-2 max-w-md mx-auto animate-fade-in-delay-2">
        Discover what happened on this day throughout history
      </p>
    </header>
  );
};

export default Header;
