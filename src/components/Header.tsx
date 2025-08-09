import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import logo from '../assets/images/So-Py_transparent_logo_new3.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-sm border-b border-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex flex-col items-center">

        {/* Centered Logo */}
        <div className="mb-4 drop-shadow-md">
          <img
            src={logo}
            alt="SO-PY logo"
            className="h-10 lg:h-12 object-contain mx-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-10 mb-4 drop-shadow-sm">
          <a href="#" className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#edbfd5] hover:to-[#ffffff] transition-all duration-300 text-sm font-medium">HANDLA NU</a>
          <a href="#" className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#edbfd5] hover:to-[#ffffff] transition-all duration-300 text-sm font-medium">OM SO-PY</a>
          <a href="#" className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#edbfd5] hover:to-[#ffffff] transition-all duration-300 text-sm font-medium">HÅLLBARHET</a>
          <a href="#" className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#edbfd5] hover:to-[#ffffff] transition-all duration-300 text-sm font-medium">VARFÖR HAVSSVAMPAR?</a>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 absolute top-4 right-4 drop-shadow-sm">
          <button className="p-2 text-white/90 hover:text-white transition-colors duration-200">
            <Search size={20} />
          </button>
          <button className="p-2 text-white/90 hover:text-white transition-colors duration-200">
            <User size={20} />
          </button>
          <button className="p-2 text-white/90 hover:text-white transition-colors duration-200 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-[#9a5476] text-xs rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 text-white/90 hover:text-white transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/30 px-4 pt-4 pb-6 bg-white/20 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Handla</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Om So-Py</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Hållbarhet</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Varför havssvampar?</a>
          </nav>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button className="p-2 text-white/90 hover:text-white transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-white/90 hover:text-white transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 text-white/90 hover:text-white transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-[#9a5476] text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
