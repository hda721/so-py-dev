import React, { useEffect, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { supabase } from '../supabaseClient';
import SO_overlay from '../assets/images/So-Py_transparent_logo_new3.png';

type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  original_price: number;
  image_url: string;
  rating: number;
  reviews: number;
  description: string;
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('active', true)
        .limit(3);

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 lg:py-32 bg-stone-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Laddar produkter...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-stone-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-400 mb-6 tracking-tight">
            Vår signaturkollektion
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            Varje svamp är noggrant utvald och hållbart skördad från Medelhavets och Karibiens rena vatten
            för att ge dig en varsam och naturlig rengöringsupplevelse.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-stone-100">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <img
                  src={SO_overlay}
                  alt="SO logo"
                  className="absolute bottom-4 right-4 w-12 opacity-80"
                />
                {/* Sale Badge */}
                {product.original_price > product.price && (
                  <div className="absolute top-4 left-4 bg-stone-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Spara {Math.round(((product.original_price - product.price) / product.original_price) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide font-medium mb-2">
                    {product.type}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-light text-stone-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stone-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-light text-stone-800">
                    {product.price} kr
                  </span>
                  {product.original_price > product.price && (
                    <span className="text-lg text-stone-400 line-through">
                      {product.original_price} kr
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-6 py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-900 transition-all duration-300 group-hover:bg-stone-900">
                  Lägg i varukorg
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-stone-700 font-medium rounded-full border border-stone-300 hover:bg-stone-50 hover:border-stone-400 transition-all duration-300">
            <span>Se alla produkter</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
