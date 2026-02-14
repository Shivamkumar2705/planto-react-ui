import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import images
import p1 from '../assets/product-1.png';
import p2 from '../assets/product-2.png';
import p4 from '../assets/product-4.png';
import p5 from '../assets/product-5.png';

const bestO2Plants = [
    { 
        id: 1, 
        name: "Beautiful Calathea Plant for Your Home", 
        img: p1, // <--- Moved p1 to the top to be the Default
        desc1: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        desc2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    { 
        id: 2, 
        name: "We Have Small And Best O2 Plants Collection's", 
        img: p5, 
        desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    { 
        id: 3, 
        name: "Perfect Desk Companion for Fresh Air", 
        img: p2, 
        desc1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        desc2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    { 
        id: 4, 
        name: "Rare Cactus Collection for Modern Look", 
        img: p4, 
        desc1: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
        desc2: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    },
];

const BestO2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? bestO2Plants.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
      const isLastSlide = currentIndex === bestO2Plants.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  };

  const currentPlant = bestO2Plants[currentIndex];

  return (
    <section className="px-6 md:px-16 py-24 relative">
        {/* Title */}
        <div className="flex justify-center mb-24">
            <div className="relative inline-block">
                <span className="absolute -top-2 -left-4 text-green-500/50 text-4xl font-light">⌜</span>
                <h2 className="text-3xl font-bold px-4">Our Best o2</h2>
                <span className="absolute -top-2 -right-4 text-green-500/50 text-4xl font-light">⌝</span>
            </div>
        </div>

        {/* --- MAIN CARD CONTAINER --- */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[50px] p-8 md:p-12 relative max-w-6xl mx-auto min-h-[500px] flex items-center">
            
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                
                {/* --- LEFT: FLOATING IMAGE --- */}
                <div className="relative flex justify-center md:justify-start">
                    {/* Background glow for depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-900/30 rounded-full blur-3xl"></div>
                    
                    {/* Plant Image */}
                    {/* Kept your requested large sizing and positioning */}
                    <img 
                        key={currentIndex} 
                        src={currentPlant.img} 
                        alt="Best O2 Plant" 
                        className="relative z-10 w-96 h-96 md:w-[480px] md:h-[480px] object-contain drop-shadow-2xl md:-mt-32 md:-ml-8 transition-all duration-500 animate-fade-in-up" 
                    />
                </div>

                {/* --- RIGHT: TEXT CONTENT & NAVIGATION --- */}
                <div className="space-y-6 relative">
                    <div className="animate-fade-in">
                        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                            {currentPlant.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {currentPlant.desc1}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            {currentPlant.desc2}
                        </p>
                    </div>

                    {/* Bottom Row: Button + Navigation */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                        <button className="border border-white/30 px-8 py-3 rounded-xl text-sm hover:bg-white hover:text-black transition">
                            Explore
                        </button>
                        
                        {/* Navigation Inside Card */}
                        <div className="flex items-center gap-4 text-sm font-mono text-gray-300">
                             <button onClick={prevSlide} className="hover:text-white transition p-2">
                                <FiChevronLeft size={24} />
                             </button>

                             <span className="tracking-widest">
                                0{currentIndex + 1}/0{bestO2Plants.length}
                             </span>

                             <button onClick={nextSlide} className="hover:text-white transition p-2">
                                <FiChevronRight size={24} />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* Pagination Dots (Outside Card) */}
        <div className="flex justify-center gap-2 mt-12">
             {bestO2Plants.map((_, index) => (
                <div 
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-white" : "w-1.5 bg-gray-600"}`}
                ></div>
            ))}
        </div>
    </section>
  );
};

export default BestO2;