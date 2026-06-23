import { Home, UtensilsCrossed, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useCart } from '../context/CartContext';

export function FooterNav() {
  const location = useLocation();
  const { cartCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-full shadow-2xl px-3 py-2.5 border border-gray-800">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
              isActive('/')
                ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Home className={`w-5 h-5 ${isActive('/') ? 'fill-white' : ''}`} />
            {isActive('/') && (
              <span className="text-sm" style={{ fontWeight: 600 }}>
                Home
              </span>
            )}
          </Link>

          <Link
            to="/menu"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
              isActive('/menu')
                ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <UtensilsCrossed className={`w-5 h-5 ${isActive('/menu') ? 'fill-white' : ''}`} />
            {isActive('/menu') && (
              <span className="text-sm" style={{ fontWeight: 600 }}>
                Menu
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all relative ${
              isActive('/cart')
                ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <ShoppingCart className={`w-5 h-5 ${isActive('/cart') ? 'fill-white' : ''}`} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ fontWeight: 700 }}>
                {cartCount}
              </span>
            )}
            {isActive('/cart') && (
              <span className="text-sm" style={{ fontWeight: 600 }}>
                Cart
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
