import { useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterNav } from '../components/FooterNav';

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
      return sum + price * item.quantity;
    }, 0);
  };

  const handleWhatsAppOrder = () => {
    if (!customerName || !customerAddress || !customerPhone) {
      alert('Please fill in all your details before placing the order.');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderDetails = cart
      .map((item) => {
        if (item.name.includes(' + ')) {
          const [dish, swallow] = item.name.split(' + ');
          return `${item.quantity}x ${dish} (with ${swallow}) - ${item.price}`;
        }
        return `${item.quantity}x ${item.name} - ${item.price}`;
      })
      .join('%0A');

    const total = calculateTotal().toLocaleString();

    const message = `🍽️ *New Order from Foodsy Kitchen*%0A%0A*Customer Details:*%0AName: ${customerName}%0AAddress: ${customerAddress}%0APhone: ${customerPhone}%0A%0A*Order:*%0A${orderDetails}%0A%0A*Total: ₦${total}*%0A%0APlease confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/2348106601995?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 pb-24">
        <div className="container mx-auto px-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#ff6f3c] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontWeight: 600 }}>Back to Menu</span>
          </Link>

          <div className="max-w-2xl mx-auto text-center py-20">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Add some delicious meals to get started!
            </p>
            <Link
              to="/menu"
              className="inline-block bg-[#ff5722] text-white px-8 py-4 rounded-full hover:bg-[#ff6f3c] transition-all shadow-lg"
              style={{ fontWeight: 600 }}
            >
              Browse Menu
            </Link>
          </div>
        </div>
        <FooterNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pb-24">
      <div className="container mx-auto px-4">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#ff6f3c] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span style={{ fontWeight: 600 }}>Back to Menu</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-8 text-gray-900" style={{ fontWeight: 700 }}>
            Your Order
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex gap-6"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    {item.name.includes(' + ') ? (
                      <div className="mb-2">
                        <h3 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>
                          {item.name.split(' + ')[0]}
                        </h3>
                        <span className="inline-block bg-orange-100 text-[#ff5722] text-xs px-2 py-0.5 rounded-full mt-1" style={{ fontWeight: 600 }}>
                          + {item.name.split(' + ')[1]}
                        </span>
                      </div>
                    ) : (
                      <h3 className="text-xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                        {item.name}
                      </h3>
                    )}
                    <p className="text-[#ff5722] text-lg" style={{ fontWeight: 700 }}>
                      {item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="text-gray-600 hover:text-[#ff5722] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center" style={{ fontWeight: 600 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="text-gray-600 hover:text-[#ff5722] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8">
                <h2 className="text-2xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
                  Delivery Details
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="080XXXXXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                      Delivery Address
                    </label>
                    <textarea
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Enter your full address"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 outline-none transition-all resize-none"
                      required
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal</span>
                    <span>₦{calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-4 text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="text-green-600" style={{ fontWeight: 600 }}>
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between text-2xl text-gray-900" style={{ fontWeight: 700 }}>
                    <span>Total</span>
                    <span className="text-[#ff5722]">₦{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-[#25D366] text-white py-4 rounded-full hover:bg-[#22c55e] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  style={{ fontWeight: 600, fontSize: '1.125rem' }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Order via WhatsApp
                </button>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  You'll be redirected to WhatsApp to confirm your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}
