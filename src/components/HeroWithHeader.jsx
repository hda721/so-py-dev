import React from 'react';
import Header from './Header';
import Hero from './Hero';
import heroVideo from '../assets/videos/wave_back.mp4';
import poster from '../assets/images/wave_load.png';

const HeroWithHeader = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Videobakgrund */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient-overlay för läsbarhet */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent z-0" />

      {/* Innehåll (header + hero) */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HeroWithHeader;
