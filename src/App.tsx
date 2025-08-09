import React from 'react';
import HeroWithHeader from './components/HeroWithHeader'; // ⬅️ Ny komponent
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroWithHeader /> {/* ⬅️ Videobakgrund + Header + Hero */}
      <main>
        <FeaturedProducts />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
