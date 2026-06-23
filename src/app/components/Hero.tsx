import { Phone, Clock, Star } from 'lucide-react';
import { Link } from 'react-router';
import heroImage from '../../imports/foodsy_ki.jpg';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <span className="text-white">4.9/5 Rating · Lekki, Lagos</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontWeight: 700, lineHeight: 1.1 }}>
            Fresh. Fast. Flavorful.
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Delicious Nigerian meals delivered hot to your door — made fresh daily, never leftovers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/menu"
              className="bg-white text-[#ff5722] px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-xl hover:scale-105 active:scale-95 text-center"
              style={{ fontSize: '1.125rem', fontWeight: 600 }}
            >
              Order Now 🍽️
            </Link>
            <a
              href="tel:08106601995"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white/20 transition-all"
              style={{ fontSize: '1.125rem', fontWeight: 600 }}
            >
              <Phone className="inline w-5 h-5 mr-2" />
              Call to Order
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>30 Min</div>
              <div className="text-white/80">Delivery Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-yellow-300 text-3xl mx-auto mb-3">✓</div>
              <div className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Daily Fresh</div>
              <div className="text-white/80">Cooked to Order</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-yellow-300 text-3xl mx-auto mb-3">💯</div>
              <div className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Quality</div>
              <div className="text-white/80">Guaranteed Fresh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
