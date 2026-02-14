import React from 'react';
import { BsPlayCircle } from 'react-icons/bs'; 
import heroMini from '../assets/hero-mini-plant.png';
import avatarAlina from '../assets/avatar-alina.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-0">
      
      {/* Background Blurs */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -z-10"></div>

      {/* Grid container with items-center to align Left and Right vertically */}
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        
        {/* --- LEFT CONTENT --- */}
        <div className="space-y-8 mt-10 md:mt-0 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Breath Natural
          </h1>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="flex gap-4 items-center pt-4">
            <button className="border border-white/30 px-8 py-3 rounded-2xl hover:bg-white hover:text-[#0d1f16] font-semibold transition duration-300 backdrop-blur-sm">
              Explore
            </button>
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-white/5 transition group backdrop-blur-sm border border-transparent hover:border-white/10">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition">
                 <BsPlayCircle className="text-xl" />
              </div>
              <span className="font-medium">Live Demo...</span>
            </button>
          </div>
          
          {/* Glass Card (Alina) */}
          <div className="mt-16 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl max-w-xs relative">
             <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-white/30 rounded-full"></div>
            <div className="flex items-center gap-4 mb-3">
               <img src={avatarAlina} alt="Alina" className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
               <div>
                   <p className="font-bold text-sm">Alina Patel</p>
                   <div className="flex text-yellow-400 text-xs gap-0.5">
                       <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                   </div>
               </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE - FLOATING CARD --- */}
        {/* Changed: Removed manual spacing, letting grid center it naturally */}
        <div className="relative h-full flex flex-col justify-center items-end md:pr-10 z-20 mt-20 md:mt-0">
                
            {/* THE BIG CALATHEA CARD */}
            {/* Removed 'md:top-[-80px]' to lower it. Now it sits in the center of its column. */}
            <div className="relative p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] w-72 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-visible group">
                
                {/* Floating Plant Image (Absolute position to pop out top) */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-60 flex justify-center drop-shadow-2xl transition duration-500 group-hover:-translate-y-2">
                    <img src={heroMini} alt="Small Plant" className="w-full object-contain scale-110" />
                </div>

                {/* Text Content */}
                <div className="mt-32 space-y-2">
                    <p className="text-sm text-gray-300 font-medium tracking-wider uppercase">Trendy House Plant</p>
                    <h4 className="font-bold text-3xl mb-6 flex justify-between items-center">
                        Calathea plant <span className="text-xl font-light opacity-50">→</span>
                    </h4>
                    
                    {/* Button */}
                    <button className="border-2 border-white/30 px-8 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#0d1f16] transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;