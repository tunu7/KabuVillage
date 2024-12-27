import React from 'react';

const attractions = [
  { name: "Beautiful Waterfalls", description: "Experience the serene beauty of nature.", image: "/path-to-image1.jpg" },
  { name: "Traditional Homes", description: "Learn about the cultural heritage of Kabu Village.", image: "/path-to-image2.jpg" },
  { name: "Lush Green Fields", description: "Explore the vast greenery and tranquility.", image: "/path-to-image3.jpg" },
];

const Attractions = () => {
  return (
    <section id="attractions" className="py-16 bg-green-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Attractions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">{attraction.name}</h3>
                <p className="text-gray-600 mt-2">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
