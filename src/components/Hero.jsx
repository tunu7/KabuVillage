import React from 'react';

const Hero = () => {
  return (
    <div className="bg-green-600 text-white text-center py-20 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        Welcome to Kabu Village
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        Discover the beauty and charm of our serene village.
      </p>
      <button className="bg-white text-green-600 py-2 px-6 rounded-lg shadow-md hover:bg-green-700 hover:text-white transition-all">
        Explore Now
      </button>
    </div>
  );
};

export default Hero;
