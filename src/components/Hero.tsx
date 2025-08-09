import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/videos/wave_back.mp4';
import poster from '../assets/images/wave_load.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video + Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <div className="space-y-8 animate-fade-in pt-32">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200/50">
            <span className="text-xs font-medium text-stone-600 tracking-wide uppercase">
              Naturligt rena produkter • Hållbart skördade
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight"
            style={{
              color: '#ffffffff',
              textShadow: '0 1px 3px rgba(174, 103, 136, 0.8)'
            }}
          >
            Naturens egna
            <br />
            <span className="font-normal">Hudvård</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#ffffffff' }}
          >
            Upptäck den skonsamma kraften i äkta havssvampar.
            <br />
            Hållbart skördade i Medelhavet och Karibien för en lyxig och naturlig hudvårdsupplevelse.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              className="group inline-flex items-center justify-center px-8 py-4 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#9a5476' }}
            >
              <span>Shoppa nu</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#FFFFFF] font-medium rounded-full border hover:bg-[#d271a0] transition-all duration-300"
              style={{ borderColor: '#9a5476' }}
            >
              Upptäck mer
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 pt-16 text-xs text-stone-500 tracking-wide">
            <div className="text-center">
              <div className="font-semibold text-stone-700">100%</div>
              <div>Naturliga</div>
            </div>
            <div className="w-px h-8 bg-[#9a5476]" />
            <div className="text-center">
              <div className="font-semibold text-stone-700">Eco-vänlig</div>
              <div>Skörd</div>
            </div>
            <div className="w-px h-8 bg-[#9a5476]" />
            <div className="text-center">
              <div className="font-semibold text-stone-700">Sedan</div>
              <div>2009</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
