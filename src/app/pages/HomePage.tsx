import { Link } from 'react-router';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { Delivery } from '../components/Delivery';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { FooterNav } from '../components/FooterNav';

export function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <TrustSection />

      {/* Quick Menu Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
            Ready to Order?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our full menu of delicious Nigerian dishes
          </p>
          <Link
            to="/menu"
            className="inline-block bg-[#ff5722] text-white px-10 py-5 rounded-full hover:bg-[#ff6f3c] transition-all shadow-lg hover:shadow-xl text-lg"
            style={{ fontWeight: 600 }}
          >
            View Full Menu
          </Link>
        </div>
      </section>

      <Delivery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FooterNav />
    </div>
  );
}
