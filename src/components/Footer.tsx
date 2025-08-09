import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/images/So-Py_transparent_logo_new3.png';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-stone-300 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light text-stone-800 mb-4">
              Håll kontakten med naturen
            </h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Subscribe to our newsletter for skincare tips, sustainability insights, 
              and exclusive offers on our latest sea sponge collections.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Fyll i din e-postadress"
                className="flex-1 px-6 py-4 bg-white border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-900 transition-colors duration-300">
                Prenumerera
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 bg-[#b7b1aa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <img
                src={logo}
                alt="SO-PY logo"
                className="h-10 mb-6"
              />
              <p className="text-stone-500 leading-relaxed mb-8 max-w-md">
                Det bästa naturen har att erbjuda, direkt från havet till din hud. För det är du värd.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-stone-500" />
                  <span className="text-stone-500 text-sm">
                    Uppsala, Sweden
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-stone-500" />
                  <span className="text-stone-500 text-sm">
                    kontakt@so-py.se
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-stone-500" />
                  <span className="text-stone-500 text-sm">
                    +46 790 27 63 83
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-medium mb-6">Snabblänkar</h5>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Alla produkter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Vår story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Hållbarhet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Skötselråd
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h5 className="text-lg font-medium mb-6">Kundtjänst</h5>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Jobba med oss
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Leveransinfo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    Returpolicy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-500 hover:text-white transition-colors duration-200 text-sm">
                    FAQ - Vanliga frågor
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom */}
          <div className="border-t border-stone-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-6">
                <span className="text-stone-500 text-sm">Följ oss på:</span>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/sopyskincare"
                    className="p-2 text-stone-500 hover:text-white transition-colors duration-300"
                    target="_blank"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579062757016"
                    className="p-2 text-stone-500 hover:text-white transition-colors duration-300"
                    target="_blank"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/SoPySkincare"
                    className="p-2 text-stone-500 hover:text-white transition-colors duration-300"
                    target="_blank"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm text-stone-400">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <span>© 2024 SO-PY Skincare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;