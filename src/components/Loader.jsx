
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      <p className="mt-4 text-muted-foreground">Traveling through time...</p>
    </div>
  );
};

export default Loader;
