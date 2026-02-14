import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import p1 from '../assets/product-1.png';
import p2 from '../assets/product-2.png';
import p3 from '../assets/product-3.png';
import p4 from '../assets/product-4.png';
import p5 from '../assets/product-5.png';
import p6 from '../assets/product-6.png';

const plants = [
  { id: 1, name: "Calathea plant", price: "Rs. 309/-", img: p1 },
  { id: 2, name: "Desk plant", price: "Rs. 359/-", img: p2 },
  { id: 3, name: "Calathea ai plant", price: "Rs. 399/-", img: p3 },
  { id: 4, name: "Cal 874 plant", price: "Rs. 259/-", img: p4 },
  { id: 5, name: "Show plant", price: "Rs. 759/-", img: p5 },
  { id: 6, name: "Calat O2 plant", price: "Rs. 659/-", img: p6 },
];

const TopSelling = () => {
  return (
    <section className="px-6 md:px-16 py-24">
      {/* Section Title */}
      <div className="flex justify-center mb-32">
          <div className="relative inline-block">
            <span className="absolute -top-2 -left-4 text-green-500/50 text-4xl font-light">⌜</span>
            <h2 className="text-3xl font-bold px-4">Our Top Selling</h2>
            <span className="absolute -top-2 -right-4 text-green-500/50 text-4xl font-light">⌝</span>
          </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32">
        {plants.map((plant) => (
          <div key={plant.id} className="relative group">
            
            {/* CARD BODY */}
            {/* Height 420px for the tall look */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-6 h-[420px] flex flex-col justify-end hover:bg-white/10 transition duration-500 ease-out z-0 relative overflow-visible">
                
                {/* TEXT CONTENT */}
                <div className="mb-2">
                    <h3 className="text-2xl font-normal text-white mb-2">{plant.name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">{plant.price}</span>
                        <button className="p-2.5 border border-white/20 rounded-xl hover:bg-white hover:text-black transition duration-300">
                            <FiShoppingBag size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* FLOATING IMAGE */}
            {/* CHANGED: -top-24 is exactly the sweet spot for 35% float */}
            <div className="absolute -top-24 left-0 right-0 flex justify-center pointer-events-none z-10">
                <img 
                    src={plant.img} 
                    alt={plant.name} 
                    className="w-80 h-80 object-contain drop-shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSelling;