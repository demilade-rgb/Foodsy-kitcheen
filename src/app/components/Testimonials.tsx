import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Delicious meals, I enjoyed every bite. The jollof rice was perfectly seasoned and the chicken was tender.",
    author: "Chioma A.",
    rating: 5
  },
  {
    text: "One of the best restaurants I've eaten at. The quality is consistent and delivery is always on time.",
    author: "Tunde M.",
    rating: 5
  },
  {
    text: "Just place an order 👌 You won't regret it. Been ordering from them for months now.",
    author: "Blessing O.",
    rating: 5
  },
  {
    text: "Fast delivery and the food is always hot. Love their egusi soup!",
    author: "Ibrahim K.",
    rating: 5
  },
  {
    text: "Fresh ingredients, great taste. Finally found a place I can trust for daily meals.",
    author: "Sarah L.",
    rating: 5
  },
  {
    text: "The moi moi is authentic! Reminds me of home. Will definitely be ordering again.",
    author: "Ngozi P.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-[#ff5722] px-6 py-2 rounded-full mb-4">
              Customer Love
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>4.9/5</span>
            </div>
            <p className="text-gray-600">Based on 200+ verified orders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-orange-100"
              >
                <Quote className="w-10 h-10 text-[#ff5722] mb-4 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-900" style={{ fontWeight: 600 }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#ff5722] to-[#ffa726] text-white px-8 py-4 rounded-full">
              <p className="text-lg" style={{ fontWeight: 600 }}>
                Join 500+ Happy Customers in Lekki
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
