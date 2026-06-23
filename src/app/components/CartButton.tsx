import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';

export function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      className="fixed top-6 right-6 z-50 bg-[#ff5722] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#ff6f3c] transition-all hover:scale-110 active:scale-95"
      aria-label="View cart"
    >
      <ShoppingCart className="w-7 h-7" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
