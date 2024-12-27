import React from 'react';

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        Accommodations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/images/accommodation1.jpg"
            alt="Accommodation 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Accommodation 1</h3>
          <p className="text-gray-600">
            Comfortable and affordable stay in the heart of the village.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/images/accommodation2.jpg"
            alt="Accommodation 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Accommodation 2</h3>
          <p className="text-gray-600">
            Comfortable and affordable stay in the heart of the village.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/images/accommodation3.jpg"
            alt="Accommodation 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Accommodation 3</h3>
          <p className="text-gray-600">
            Comfortable and affordable stay in the heart of the village.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
