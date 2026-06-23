import { Menu } from '../components/Menu';
import { FooterNav } from '../components/FooterNav';

export function MenuPage() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-gradient-to-r from-[#ff5722] to-[#ffa726] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-center mb-4" style={{ fontWeight: 700 }}>
            Our Menu
          </h1>
          <p className="text-xl text-center text-white/90">
            Fresh, delicious Nigerian meals made to order
          </p>
        </div>
      </div>

      <Menu />
      <FooterNav />
    </div>
  );
}
