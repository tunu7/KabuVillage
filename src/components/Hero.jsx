import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-white h-screen text-green-700 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Kabu Village</h1>
        <p className="text-lg text-gray-700">Discover the beauty, culture, and hospitality of our village.</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Explore More</button>
      </div>
    </section>
  );
};

export default Hero;
