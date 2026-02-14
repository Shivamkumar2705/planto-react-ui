import React, { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs'; 
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

// Import images
import heroMini from '../assets/hero-mini-plant.png'; // p5/Monstera style
import p1 from '../assets/product-5.png';
import p2 from '../assets/product-2.png';
import avatarAlina from '../assets/avatar-alina.png';

const heroCards = [
    { 
        id: 1, 
        category: "Trendy House Plant",
        name: "Calathea plant", 
        img: heroMini 
    },
    { 
        id: 2, 
        category: "Trendy House Plant",
        name: "Monstera Deliciosa", 
        img: p1 
    },
    { 
        id: 3, 
        category: "Trendy House Plant",
        name: "Aglaonema Plant", 
        img: p2 
    },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1));
  };

  const current = heroCards[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 pb-0">
      
      {/* Background Blurs */}
      <div className="absolute top-20 left-[-5%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="grid md:grid-cols-2 items-center gap-6 h-full">
        
        {/* --- LEFT CONTENT (Remains exactly as you provided) --- */}
        <div className="space-y-6 mt-6 md:mt-0 relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-[88px] font-semibold leading-[100%] tracking-tight text-white opacity-75 whitespace-nowrap">
            Breath Natural
          </h1>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 items-center pt-2">
            <button className="border border-white/30 px-7 py-2.5 rounded-xl hover:bg-white hover:text-[#0d1f16] font-semibold transition duration-300 backdrop-blur-sm text-sm">
              Explore
            </button>
            <button className="flex items-center gap-3 px-5 py-2.5 rounded-xl hover:bg-white/5 transition group backdrop-blur-sm border border-transparent hover:border-white/10">
              <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition">
                 <BsPlayCircle className="text-lg" />
              </div>
              <span className="font-medium text-sm">Live Demo...</span>
            </button>
          </div>
          <div className="mt-12 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-[280px] relative">
             <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1 h-10 bg-white/30 rounded-full"></div>
            <div className="flex items-center gap-3 mb-2">
               <img src={avatarAlina} alt="Alina" className="w-10 h-10 rounded-full object-cover border-2 border-white/10" />
               <div>
                   <p className="font-bold text-xs">Alina Patel</p>
                   <div className="flex text-yellow-400 text-[10px] gap-0.5">
                       <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                   </div>
               </div>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE - MULTI-CARD SLIDER --- */}
        <div className="relative h-full flex flex-col justify-center items-end md:pr-6 z-20 mt-16 md:mt-0">
            {/* 13-inch scaled card: w-64 | Radius: 35px */}
            <div className="relative p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] w-64 shadow-[0_15px_40px_rgba(0,0,0,0.3)] overflow-visible group">
                
                {/* Floating Plant Image - Swaps with currentIndex */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-52 h-52 flex justify-center drop-shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <img 
                      key={current.id}
                      src={current.img} 
                      alt={current.name} 
                      className="w-full h-full object-contain scale-110 animate-fade-in-up" 
                    />
                </div>

                {/* Text Content */}
                <div className="mt-28 space-y-1.5">
                    <p className="text-[10px] text-gray-300 font-medium tracking-wider uppercase">{current.category}</p>
                    <h4 className="font-bold text-2xl mb-4 flex justify-between items-center text-white">
                        {current.name} <span className="text-lg font-light opacity-50">→</span>
                    </h4>
                    
                    <button className="border-2 border-white/30 px-7 py-2.5 rounded-full text-xs font-bold hover:bg-white hover:text-[#0d1f16] transition-all duration-300 text-white">
                        Buy Now
                    </button>
                </div>

                {/* Navigation Dots & Arrows inside the Right side layout */}
                <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex gap-1.5">
                        {heroCards.map((_, i) => (
                            <div 
                                key={i}
                                className={`h-1 rounded-full transition-all duration-300 ${currentIndex === i ? "w-6 bg-white" : "w-1.5 bg-white/30"}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-3 text-white">
                        <button onClick={prevSlide} className="hover:scale-110 transition"><FiChevronLeft size={18}/></button>
                        <button onClick={nextSlide} className="hover:scale-110 transition"><FiChevronRight size={18}/></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;