import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  const whatsappNumber = '2348106601995';
  const phoneNumber = '08106601995';

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#ff5722] to-[#ffa726]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            Ready to Order?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Get fresh, delicious meals delivered in 30 minutes
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#ff5722]" />
              </div>
              <h3 className="text-2xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                Call to Order
              </h3>
              <p className="text-3xl text-[#ff5722] mb-2" style={{ fontWeight: 700 }}>
                0810 660 1995
              </p>
              <p className="text-gray-600">Speak with us directly</p>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Foodsy%20Kitchen!%20I'd%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                WhatsApp Order
              </h3>
              <p className="text-3xl text-green-600 mb-2" style={{ fontWeight: 700 }}>
                Chat Now
              </p>
              <p className="text-gray-600">Quick and convenient</p>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <MapPin className="w-8 h-8 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="mb-1" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    Location
                  </h4>
                  <p className="text-white/90">1 June 12 Boulevard, Abraham Adasanya Estate, 101222, Lagos</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Clock className="w-8 h-8 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="mb-1" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    Hours
                  </h4>
                  <p className="text-white/90">Mon-Sun: 7AM - 10PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-white/80 text-lg">
              No minimum order · Free delivery within Lekki · Payment on delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
