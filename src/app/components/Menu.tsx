import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';
// Import the available real menu images
import jollofChickenImage from '../../imports/Screenshot_20260507_164050_WhatsApp.jpg';
import whiteRiceChickenImage from '../../imports/Screenshot_20260507_164108_WhatsApp.jpg';
import beansPlantainImage from '../../imports/Screenshot_20260507_164100_WhatsApp.jpg';
import friedTurkeyImage from '../../imports/Screenshot_20260507_164153_WhatsApp.jpg';
import friedChickenDrumImage from '../../imports/Screenshot_20260507_164119_WhatsApp.jpg';
import moiMoiImage from '../../imports/Screenshot_20260507_164201_WhatsApp.jpg';
import yamEggImage from '../../imports/yam_and_egg.jpg';
import edikankoSoupImage from '../../imports/Screenshot_20260507_163907_WhatsApp.jpg';
import afangSoupBowlImage from '../../imports/Screenshot_20260507_163922_WhatsApp.jpg';
import okraSoupImage from '../../imports/Screenshot_20260507_164012_WhatsApp.jpg';
import afangSoupImage from '../../imports/Screenshot_20260507_164001_WhatsApp-1.jpg';
import egusiSoupImage from '../../imports/Screenshot_20260507_163945_WhatsApp.jpg';

const menuItems = {
  main: [
    {
      name: 'Jollof Rice & Chicken',
      price: '₦3,500',
      description: 'Our signature smoky jollof with perfectly seasoned grilled chicken',
      image: jollofChickenImage,
      popular: true
    },
    {
      name: 'White Rice & Chicken',
      price: '₦3,000',
      description: 'Tender white rice served with succulent chicken',
      image: whiteRiceChickenImage
    },
    {
      name: 'Yam & Egg',
      price: '₦2,500',
      description: 'Boiled yam with rich egg and tomato sauce',
      image: yamEggImage
    },
    {
      name: 'Beans & Plantain',
      price: '₦2,500',
      description: 'Hearty beans served with sweet fried plantain',
      image: beansPlantainImage
    },
    {
      name: 'Fried Turkey',
      price: '₦3,500',
      description: 'Crispy golden fried turkey, perfectly seasoned',
      image: friedTurkeyImage
    },
    {
      name: 'Fried Chicken Drum',
      price: '₦2,000',
      description: 'Juicy chicken drumstick, fried to perfection',
      image: friedChickenDrumImage
    },
    {
      name: 'Moi Moi',
      price: '₦700',
      description: 'Steamed bean pudding, smooth and delicious',
      image: moiMoiImage
    }
  ],
  soups: [
    {
      name: '2 Litres Bowl of Edikankong Soup',
      price: '₦18,000',
      description: 'Rich vegetable soup with assorted meat and fish',
      image: edikankoSoupImage,
      popular: true,
      swallowOptions: undefined as string[] | undefined
    },
    {
      name: '2 Litres Bowl of Afang Soup',
      price: '₦18,000',
      description: 'Traditional Afang soup loaded with protein and assorted meat',
      image: afangSoupBowlImage,
      swallowOptions: undefined as string[] | undefined
    },
    {
      name: 'Afang Soup',
      price: '₦3,500',
      description: 'Traditional Afang soup with assorted meat and fish, served with your choice of swallow',
      image: afangSoupImage,
      swallowOptions: ['Eba', 'Fufu', 'Semo'] as string[]
    },
    {
      name: 'Egusi Soup',
      price: '₦3,500',
      description: 'Hearty ground melon seed soup cooked with assorted meat and crayfish',
      image: egusiSoupImage,
      popular: true,
      swallowOptions: ['Eba', 'Fufu', 'Semo'] as string[]
    },
    {
      name: 'Okra Soup',
      price: '₦3,500',
      description: 'Fresh okra soup with assorted meat and fish, served with your choice of swallow',
      image: okraSoupImage,
      swallowOptions: ['Eba', 'Fufu', 'Semo'] as string[]
    }
  ]
};

type Category = 'main' | 'soups';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('main');
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [swallowPickerOpen, setSwallowPickerOpen] = useState<string | null>(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToOrder = (item: { name: string; price: string; image: string; swallowOptions?: string[] }) => {
    if (item.swallowOptions && item.swallowOptions.length > 0) {
      setSwallowPickerOpen(swallowPickerOpen === item.name ? null : item.name);
    } else {
      addToCart({ name: item.name, price: item.price, image: typeof item.image === 'string' ? item.image : '' });
      navigate('/cart');
    }
  };

  const handleSwallowSelect = (item: { name: string; price: string; image: string }, swallow: string) => {
    addToCart({
      name: `${item.name} + ${swallow}`,
      price: item.price,
      image: typeof item.image === 'string' ? item.image : ''
    });
    setSwallowPickerOpen(null);
    navigate('/cart');
  };

  const allMenuItems = showAllMenu
    ? [...menuItems.main, ...menuItems.soups]
    : menuItems[activeCategory];

  const displayItems = activeCategory === 'all'
    ? [...menuItems.main, ...menuItems.soups]
    : menuItems[activeCategory];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-[#ff5722] px-6 py-2 rounded-full mb-4">
              Our Menu
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
              What's Cooking Today?
            </h2>
            <p className="text-xl text-gray-600">
              All meals prepared fresh to order
            </p>
          </div>

          {!showAllMenu && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveCategory('main')}
                className={`px-8 py-3 rounded-full transition-all ${
                  activeCategory === 'main'
                    ? 'bg-[#ff5722] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontWeight: 600 }}
              >
                Main
              </button>
              <button
                onClick={() => setActiveCategory('soups')}
                className={`px-8 py-3 rounded-full transition-all ${
                  activeCategory === 'soups'
                    ? 'bg-[#ff5722] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontWeight: 600 }}
              >
                Soups & Swallows
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {(showAllMenu ? [...menuItems.main, ...menuItems.soups] : menuItems[activeCategory]).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative"
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-[#ff5722] text-white px-4 py-1 rounded-full z-10 text-sm" style={{ fontWeight: 600 }}>
                    Popular
                  </div>
                )}
                <div className="h-56 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>
                      {item.name}
                    </h3>
                    <span className="text-2xl text-[#ff5722]" style={{ fontWeight: 700 }}>
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="relative">
                    <button
                      onClick={() => handleAddToOrder(item as { name: string; price: string; image: string; swallowOptions?: string[] })}
                      className="w-full bg-[#ff5722] text-white py-3 rounded-full hover:bg-[#ff6f3c] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      style={{ fontWeight: 600 }}
                    >
                      Add to Order
                      {'swallowOptions' in item && item.swallowOptions && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${swallowPickerOpen === item.name ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    {'swallowOptions' in item && item.swallowOptions && swallowPickerOpen === item.name && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden z-20">
                        <p className="text-sm text-gray-500 px-4 pt-3 pb-2" style={{ fontWeight: 600 }}>Choose your swallow:</p>
                        {item.swallowOptions.map((swallow) => (
                          <button
                            key={swallow}
                            onClick={() => handleSwallowSelect(item as { name: string; price: string; image: string }, swallow)}
                            className="w-full text-left px-4 py-3 hover:bg-orange-50 text-gray-800 transition-colors border-t border-gray-100 first:border-t-0"
                            style={{ fontWeight: 600 }}
                          >
                            {swallow}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAllMenu && (
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Want to see the full menu?</p>
              <button
                onClick={() => setShowAllMenu(true)}
                className="bg-orange-100 text-[#ff5722] px-8 py-4 rounded-full hover:bg-orange-200 transition-all"
                style={{ fontWeight: 600 }}
              >
                View Complete Menu
              </button>
            </div>
          )}

          {showAllMenu && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllMenu(false)}
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-200 transition-all"
                style={{ fontWeight: 600 }}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}