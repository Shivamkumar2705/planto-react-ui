import React, { useState } from 'react';
import { FiSearch, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-16 absolute top-0 w-full z-50">
      
      {/* Logo - Added 'z-50 relative' so it stays visible over the menu */}
      <div className="flex items-center gap-2 relative z-50">
        <img src={logoIcon} alt="Planto Logo" className="w-6 h-6 object-contain" />
        <span className="text-xl font-bold tracking-wide text-white">Planto.</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-gray-300 text-sm font-medium">
        <li className="hover:text-white cursor-pointer transition">Home</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-1 transition">Plant Type ▾</li>
        <li className="hover:text-white cursor-pointer transition">More</li>
        <li className="hover:text-white cursor-pointer transition">Contact</li>
      </ul>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-8 text-white">
        <FiSearch className="text-xl cursor-pointer hover:text-gray-300 transition" />
        <FiShoppingBag className="text-xl cursor-pointer hover:text-gray-300 transition" />
        <FiMenu className="text-2xl cursor-pointer hover:text-gray-300 transition" />
      </div>

      {/* Mobile Menu Button (Hamburger/Close) */}
      <div className="md:hidden relative z-50 text-white flex items-center gap-6">
        {/* Search/Bag visible on mobile too? Optional, keeping simplified for now */}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={28}/> : <FiMenu size={28}/>}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown - FIXED positioning to cover full screen */}
      <div className={`fixed inset-0 bg-[#0d1f16] flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible z-40' : 'opacity-0 invisible -z-10'}`}>
          
          {/* Menu Links */}
          <a href="#" className="text-3xl font-bold text-white hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="text-3xl font-bold text-white hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Plant Types</a>
          <a href="#" className="text-3xl font-bold text-white hover:text-green-400 transition" onClick={() => setIsOpen(false)}>More</a>
          <a href="#" className="text-3xl font-bold text-white hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
          
          {/* Mobile Socials or Extra Icons */}
          <div className="flex gap-8 mt-8 text-white/50">
             <FiSearch size={24} className="hover:text-white cursor-pointer" />
             <FiShoppingBag size={24} className="hover:text-white cursor-pointer" />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;