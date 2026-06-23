import { Heart, Users, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-5xl mb-2 text-[#ff5722]" style={{ fontWeight: 700 }}>500+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-5xl mb-2 text-[#ff5722]" style={{ fontWeight: 700 }}>4.9</div>
                  <p className="text-gray-600">Average Rating</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-5xl mb-2 text-[#ff5722]" style={{ fontWeight: 700 }}>30</div>
                  <p className="text-gray-600">Min Delivery</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-5xl mb-2 text-[#ff5722]" style={{ fontWeight: 700 }}>50+</div>
                  <p className="text-gray-600">Menu Items</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block bg-[#ff5722] text-white px-6 py-2 rounded-full mb-6">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
                Passion for Great Food
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Foodsy Kitchen started with a simple mission: serve delicious, authentic Nigerian meals that remind you of home.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We've grown from a small kitchen to one of Lekki's favorite food spots, but our commitment remains the same—fresh ingredients, bold flavors, and service that makes you smile.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#ff5722]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Made with Love
                    </h3>
                    <p className="text-gray-600">
                      Every dish is prepared with care and authentic recipes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#ff5722]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Community First
                    </h3>
                    <p className="text-gray-600">
                      We listen to feedback and constantly improve
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#ff5722]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Always Improving
                    </h3>
                    <p className="text-gray-600">
                      Upgraded processes to ensure consistent quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
