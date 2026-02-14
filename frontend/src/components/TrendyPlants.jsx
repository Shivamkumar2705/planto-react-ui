import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import trendy1 from '../assets/trendy-1.png'; // White pot plant
import trendy2 from '../assets/trendy-2.png'; // Cyan pot plant

const TrendyPlants = () => {
  return (
    <section className="px-6 md:px-16 py-20 relative z-10">
       <div className="text-center mb-32">
           <div className="relative inline-block">
                <span className="absolute -top-4 -left-6 text-white/20 text-5xl font-light">⌜</span>
                <h2 className="text-4xl font-bold">Our Trendy plants</h2>
                <span className="absolute -top-4 -right-6 text-white/20 text-5xl font-light">⌝</span>
           </div>
       </div>
       
       {/* Reduced max-width to make cards smaller/tighter */}
       <div className="max-w-4xl mx-auto flex flex-col gap-32">
          
          {/* CARD 1: Image Left (Floating Out), Text Right */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[70px] px-8 py-10 md:px-12 md:py-8 flex flex-col md:flex-row items-center hover:bg-white/10 transition duration-500 overflow-visible group">
              
              {/* Plant Image - Negative Margin to float OUT of the div */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
                  <img 
                    src={trendy1} 
                    alt="Small Desk Plant" 
                    // Scale 150% and pull it left and up to float out
                    className="w-64 md:w-80 object-contain drop-shadow-2xl md:-ml-24 md:-mt-16 transform scale-125 md:scale-150 transition duration-500 group-hover:scale-[1.6]" 
                  />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-3 text-center md:text-left mt-8 md:mt-0">
                  <h3 className="text-2xl md:text-3xl font-bold">For Small Desk Ai Plant</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <h4 className="text-2xl font-bold">Rs. 599/-</h4>
                  <div className="flex gap-4 justify-center md:justify-start pt-2">
                      <button className="border border-white/30 px-6 py-2 rounded-xl text-sm hover:bg-white hover:text-[#0d1f16] font-medium transition">
                          Explore
                      </button>
                      <button className="border border-white/30 p-2 rounded-xl hover:bg-white hover:text-[#0d1f16] transition">
                          <FiShoppingBag size={18} />
                      </button>
                  </div>
              </div>
          </div>

          {/* CARD 2: Text Left, Image Right (Floating Out) */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[70px] px-8 py-10 md:px-12 md:py-8 flex flex-col-reverse md:flex-row items-center hover:bg-white/10 transition duration-500 overflow-visible group">
              
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-3 text-center md:text-left mt-8 md:mt-0 md:pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold">For Small Desk Ai Plant</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <h4 className="text-2xl font-bold">Rs. 599/-</h4>
                  <div className="flex gap-4 justify-center md:justify-start pt-2">
                      <button className="border border-white/30 px-6 py-2 rounded-xl text-sm hover:bg-white hover:text-[#0d1f16] font-medium transition">
                          Explore
                      </button>
                      <button className="border border-white/30 p-2 rounded-xl hover:bg-white hover:text-[#0d1f16] transition">
                          <FiShoppingBag size={18} />
                      </button>
                  </div>
              </div>

              {/* Plant Image - Floating OUT to the right */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                  <img 
                    src={trendy2} 
                    alt="Fresh Deco Plant" 
                    // Scale 150% and pull it right and up
                    className="w-64 md:w-80 object-contain drop-shadow-2xl md:-mr-24 md:-mt-10 transform scale-125 md:scale-150 transition duration-500 group-hover:scale-[1.6]" 
                  />
              </div>
          </div>

       </div>
    </section>
  );
};

export default TrendyPlants;