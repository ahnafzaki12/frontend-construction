import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from '../common/HeroSection';
import About from '../common/About';
import Footer from '../common/Footer';
import Services from '../common/Services';
import Projects from '../common/Projects';
import Why from '../common/Why';
import Testimoni from '../common/Testimoni';
import Blog from '../common/Blog';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Why />
      <Testimoni />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
