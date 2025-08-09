import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import Insta1 from '../assets/images/routine.webp';
import Insta2 from '../assets/images/epsom_salt.jpg';
import Insta3 from '../assets/images/castor_oil.jpg';
import Insta4 from '../assets/images/jojobaoil.jpg';
import Insta5 from '../assets/images/sponge_on_stony_beach.png';
import Insta6 from '../assets/images/sponge_origin.png';

const instagramPosts = [
  {
    id: 1,
    image: Insta1,
    caption: "Morning skincare ritual with our Mediterranean Silk Sponge ✨"
  },
  {
    id: 2,
    image: Insta2,
    caption: "The natural texture that makes all the difference 🌊"
  },
  {
    id: 3,
    image: Insta3,
    caption: "Sustainable beauty starts with conscious choices 🌿"
  },
  {
    id: 4,
    image: Insta4,
    caption: "Self-care Sunday with our Baby Soft Collection 💙"
  },
  {
    id: 5,
    image: Insta5,
    caption: "From sea to skin - the purest journey 🐚"
  },
  {
    id: 6,
    image: Insta6,
    caption: "Elevating your cleansing ritual, naturally ✨"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <Instagram className="w-8 h-8 text-stone-700" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 tracking-tight">
              @sopyskincare
            </h2>
          </div>
          <p className="text-lg text-stone-600 leading-relaxed">
            Gå med i vår community och dela dina egna "SO-PY moments". 
            Tagga oss i dina inlägg så har du chansen att få en "feature" i vår feed.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square bg-stone-100 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <ExternalLink className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-white text-sm leading-tight line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12">
{/* Follow Button */}
<div className="text-center mt-12">
  <a
    href="https://www.instagram.com/sopyskincare"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <Instagram className="w-5 h-5 mr-3" />
    Följ @sopyskincare
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;