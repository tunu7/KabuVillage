import React from 'react';

const accommodations = [
  { name: "Tent Camping", description: "Stay close to nature with our tent camping options." },
  { name: "Hut Stays", description: "Enjoy cozy and traditional huts for a comfortable stay." },
];

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Accommodations</h2>
        <ul className="space-y-4">
          {accommodations.map((accommodation, index) => (
            <li key={index} className="p-4 bg-green-100 shadow rounded-lg">
              <h3 className="text-xl font-bold text-green-700">{accommodation.name}</h3>
              <p className="text-gray-600">{accommodation.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Accommodations;
