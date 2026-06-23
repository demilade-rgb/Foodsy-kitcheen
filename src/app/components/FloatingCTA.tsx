import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:08106601995"
      className="fixed bottom-6 right-6 z-50 bg-[#ff5722] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#ff6f3c] transition-all hover:scale-110 active:scale-95 animate-bounce"
      aria-label="Call to order"
    >
      <Phone className="w-8 h-8" />
    </a>
  );
}
