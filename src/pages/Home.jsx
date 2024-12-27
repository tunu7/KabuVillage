import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Attractions from '../components/Attractions';
import Accommodations from '../components/Accommodations';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Attractions />
      <Accommodations />
      <Footer />
    </>
  );
};

export default Home;
