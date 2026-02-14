import React from 'react';
import logoIcon from '../assets/logo-icon.png';

const Footer = () => {
  return (
    // Changed bg-[#0b1610] to bg-[#222C1D]
    <footer className="bg-[#222C1D] px-8 md:px-16 pt-16 pb-8 mt-16">
      <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-12">
        {/* Brand */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Logo" className="w-6 h-6" />
            <span className="text-xl font-bold text-white">Planto.</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-6 text-sm">Quick Link's</h4>
          <ul className="space-y-3 text-gray-400 text-xs">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Plant Type's</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
            <li className="hover:text-white cursor-pointer transition">Privacy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-6 text-sm">For Every Update's</h4>
          <div className="flex items-center border border-gray-600 rounded-md overflow-hidden max-w-md bg-transparent">
            <input 
              type="email" 
              placeholder="Enter Email..." 
              className="bg-transparent px-4 py-3 w-full outline-none text-xs text-white placeholder-gray-500"
            />
            <button className="bg-white text-black font-bold px-6 py-3 text-xs tracking-wider hover:bg-gray-200 transition">
                SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <div className="flex gap-6 mb-4 md:mb-0">
             <span className="hover:text-white cursor-pointer">FB</span>
             <span className="hover:text-white cursor-pointer">TW</span>
             <span className="hover:text-white cursor-pointer">LI</span>
          </div>
          <p>Planto © All right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;