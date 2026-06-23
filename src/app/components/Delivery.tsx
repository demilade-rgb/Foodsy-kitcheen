import { Truck, MapPin, Clock, CheckCircle } from 'lucide-react';

export function Delivery() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#ff5722] text-white px-6 py-2 rounded-full mb-6">
                Fast & Reliable
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
                Delivered Hot. Right to Your Door.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We know you're hungry. That's why we've optimized our delivery to get your fresh meals to you in record time.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Average 30-Minute Delivery
                    </h3>
                    <p className="text-gray-600">
                      From kitchen to your table in under 30 minutes
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Covering All of Lekki
                    </h3>
                    <p className="text-gray-600">
                      Reliable service across Lekki and surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Track Your Order
                    </h3>
                    <p className="text-gray-600">
                      Real-time updates from kitchen to doorstep
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200">
                <Truck className="w-16 h-16 text-[#ff5722] mb-6" />
                <div className="space-y-6">
                  <div className="border-l-4 border-[#ff5722] pl-6">
                    <h4 className="mb-2 text-gray-900" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      Real Customer Story
                    </h4>
                    <p className="text-gray-700 italic text-lg mb-2">
                      "They were a lifesaver—delivered on time and tasted amazing. I was working late and needed something quick. Foodsy came through!"
                    </p>
                    <p className="text-sm text-gray-500">— Verified Customer</p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6">
                    <h4 className="mb-4 text-gray-900" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      How It Works
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff5722] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                          1
                        </div>
                        <span className="text-gray-700">Place your order by phone or WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff5722] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                          2
                        </div>
                        <span className="text-gray-700">We prepare your meal fresh</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff5722] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                          3
                        </div>
                        <span className="text-gray-700">Delivered hot to your door</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
