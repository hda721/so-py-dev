import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "London, UK",
    rating: 5,
    text: "I've been using SO-PY sponges for over a year now, and my skin has never looked better. The Mediterranean Silk Sponge is incredibly gentle yet effective. It's become an essential part of my daily routine.",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "As someone with sensitive skin, finding the right products is always a challenge. SO-PY's Baby Soft Collection has been a game-changer. Natural, sustainable, and incredibly effective.",
    image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Marie Dubois",
    location: "Paris, France",
    rating: 5,
    text: "The quality is exceptional and knowing they're sustainably sourced makes me feel good about my purchase. The Honeycomb Deep Cleanse has transformed my weekly skincare ritual.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">
            Se vad våra kunder säger
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Anlsut till vår community av medvetna skönhetsentusiaster som har upptäckt
            den härliga känslan i naturliga hudvprdsprodukter.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-stone-50/50 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-stone-300 group-hover:text-stone-400 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-stone-700 leading-relaxed mb-8 text-base">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-stone-800 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-stone-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-stone-100/80 rounded-full">
            <Star className="w-5 h-5 text-amber-400 fill-current mr-2" />
            <span className="text-sm font-medium text-stone-700">
              4.9/5 from over 1,200+ verified reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;