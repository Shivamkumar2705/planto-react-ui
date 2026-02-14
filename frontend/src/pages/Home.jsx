import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrendyPlants from '../components/TrendyPlants';
import TopSelling from '../components/TopSelling';
import Reviews from '../components/Reviews';
import BestO2 from '../components/BestO2';
import Footer from '../components/Footer';

// Import the big plant here
import heroMainPlant from '../assets/hero-main-plant.png';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#171F12] text-white selection:bg-green-500 selection:text-white overflow-x-hidden">
      
      {/* --- THE BIG CENTRAL PLANT LAYER --- */}
      {/* Changed h-[1200px] to h-auto so it doesn't cut off the bottom */}
      <div className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0 overflow-hidden">
          
          <div className="relative w-full h-full">
             
             {/* FIX 1: Changed 'h-full object-cover' to 'h-auto'.
                This ensures the image scales naturally and shows the bottom (pot).
             */}
             <img 
                src={heroMainPlant} 
                alt="Background Plant" 
                className="w-full h-auto object-top mt-[-50px] md:mt-0" 
             />

             {/* Vignette Overlay */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#171F12_70%)]"></div>
             
             {/* Bottom blend */}
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#171F12] to-transparent"></div>
          </div>
      </div>

      {/* --- CONTENT LAYERS (z-10) --- */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrendyPlants />
        <div className="bg-[#171F12]"> 
            <TopSelling />
            <Reviews />
            <BestO2 />
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;