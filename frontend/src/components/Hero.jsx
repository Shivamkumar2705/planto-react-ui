import React, { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs'; 
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

// Import images
import heroMini from '../assets/hero-mini-plant.png';
import p1 from '../assets/product-5.png';
import p2 from '../assets/product-2.png';
import avatarAlina from '../assets/avatar-alina.png';

const heroCards = [
    { id: 1, category: "Trendy House Plant", name: "Calathea plant", img: heroMini },
    { id: 2, category: "Trendy House Plant", name: "Monstera Deliciosa", img: p1 },
    { id: 3, category: "Trendy House Plant", name: "Aglaonema Plant", img: p2 },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1));

  const current = heroCards[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 pb-0">
      
      {/* Background Blurs */}
      <div className="absolute top-20 left-[-5%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="grid md:grid-cols-2 items-center gap-6 h-full max-w-7xl mx-auto">
        
        {/* --- LEFT CONTENT --- */}
        <div className="space-y-6 mt-6 md:mt-0 relative z-10">
          
          {/* Main Heading: 88px */}
          <h1 className="text-4xl sm:text-6xl md:text-[88px] font-semibold leading-[100%] tracking-tight text-white opacity-75 whitespace-nowrap">
            Breath Natural
          </h1>

          {/* Sub-Description: Scaled from 23px -> 17px | Width: 893px -> 670px */}
          <p className="text-white opacity-75 text-[17px] font-medium leading-[100%] max-w-[670px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="flex gap-4 items-center pt-2">
            {/* Explore Button: Scaled from 217px x 64px -> 162px x 48px | Radius: 12px -> 9px */}
            <button className="border-[2px] border-white/75 text-white w-[162px] h-[48px] rounded-[9px] font-semibold text-sm hover:bg-white hover:text-[#0d1f16] transition duration-300">
              Explore
            </button>

            {/* Live Demo Button: Scaled from 196px x 64px -> 147px x 48px */}
            <button className="flex items-center justify-center gap-2 border-[2px] border-white/20 w-[147px] h-[48px] rounded-[9px] hover:bg-white/5 transition group backdrop-blur-sm">
              <div className="text-white/75 group-hover:text-white transition">
                 <BsPlayCircle className="text-xl" />
              </div>
              <span className="font-medium text-white text-sm">Live Demo</span>
            </button>
          </div>

          {/* Alena Patel Card: 306px x 178px */}
          <div className="mt-10 p-6 bg-white/5 backdrop-blur-[20.2px] border-[2px] border-white/20 rounded-[34px] w-[306px] h-[178px] flex flex-col justify-center relative shadow-lg">
            <div className="flex items-center gap-3 mb-3">
               <img src={avatarAlina} alt="Alena" className="w-[48px] h-[48px] rounded-full object-cover" />
               <div className="flex flex-col justify-center">
                   <p className="text-white text-base font-normal">alena Patel</p>
                   <div className="flex text-yellow-400 text-[10px] gap-1 mt-0.5">
                       <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                   </div>
               </div>
            </div>
            {/* Review Description: 17px -> 13px */}
            <p className="text-[13px] text-white opacity-75 leading-[100%] font-normal w-[255px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE - MULTI-CARD SLIDER (13-inch Scaled) --- */}
        <div className="relative h-full flex flex-col justify-center items-end md:pr-6 z-20 mt-16 md:mt-0">
            <div className="relative p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] w-64 shadow-[0_15px_40px_rgba(0,0,0,0.3)] overflow-visible group">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-52 h-52 flex justify-center drop-shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <img key={current.id} src={current.img} alt={current.name} className="w-full h-full object-contain scale-110 animate-fade-in-up" />
                </div>
                <div className="mt-28 space-y-1.5">
                    {/* Category: 23px -> 17px */}
                    <p className="text-[17px] text-gray-300 font-medium tracking-wider uppercase">{current.category}</p>
                    {/* Name: 38px -> 28px */}
                    <h4 className="font-bold text-[28px] mb-4 flex justify-between items-center text-white">
                      {current.name} <span className="text-lg font-light opacity-50">→</span>
                    </h4>
                    {/* Buy Now Button: 217x64 -> 162x48 */}
                    <button className="border-2 border-white/30 w-[162px] h-[48px] rounded-full text-xs font-bold hover:bg-white hover:text-[#0d1f16] transition-all duration-300 text-white">
                      Buy Now
                    </button>
                </div>
                <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex gap-1.5">{heroCards.map((_, i) => (<div key={i} className={`h-1 rounded-full transition-all duration-300 ${currentIndex === i ? "w-6 bg-white" : "w-1.5 bg-white/30"}`} />))}</div>
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