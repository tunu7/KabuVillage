import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Attractions from '../components/Attractions';
import Accommodations from '../components/Accommodations';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-16 xl:px-24">
      <Navbar />
      <Hero />
      <Attractions />
      <Accommodations />
      <Footer />
    </div>
  );
};

export default Home;
