import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl mb-4 text-[#ff5722]" style={{ fontWeight: 700 }}>
                Foodsy Kitchen
              </h3>
              <p className="text-gray-400 mb-4">
                Fresh, fast, and flavorful Nigerian meals delivered right to your door in Lekki, Lagos.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/popular/foodsy-kitchen-lagos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff5722] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/p/Foodsy-Kitchen-100063894380015/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff5722] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff5722] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-[#ff5722] transition-colors">Menu</a></li>
                <li><a href="#contact" className="hover:text-[#ff5722] transition-colors">Order Now</a></li>
                <li><a href="#" className="hover:text-[#ff5722] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#ff5722] transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                Contact
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>0810 660 1995</li>
                <li>1 June 12 Boulevard,<br />Abraham Adasanya Estate,<br />101222, Lagos</li>
                <li>7AM - 10PM Daily</li>
                <li>info@foodsykitchen.ng</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Foodsy Kitchen. All rights reserved. Made with ❤️ in Lagos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
