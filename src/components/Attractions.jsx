import React from 'react';

const Attractions = () => {
  return (
    <section id="attractions" className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        Attractions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/images/attraction1.jpg"
            alt="Attraction 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Attraction 1</h3>
          <p className="text-gray-600">
            Description of Attraction 1. A serene and beautiful place to visit.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/images/attraction2.jpg"
            alt="Attraction 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Attraction 2</h3>
          <p className="text-gray-600">
            Description of Attraction 2. A serene and beautiful place to visit.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/images/attraction3.jpg"
            alt="Attraction 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Attraction 3</h3>
          <p className="text-gray-600">
            Description of Attraction 3. A serene and beautiful place to visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
