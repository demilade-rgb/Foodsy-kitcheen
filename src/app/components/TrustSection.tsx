import { ShieldCheck, Clock, ThumbsUp, Award } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#ff5722] text-white px-6 py-2 rounded-full mb-4">
              Our Promise to You
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
              Fresh Food. Every Single Time.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We know you deserve the best. That's why we've put strict quality standards in place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[#ff5722]" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                Prepared Fresh Daily
              </h3>
              <p className="text-gray-600">
                Every meal is cooked fresh to order. No pre-made food, ever.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#ff5722]" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                Quality Checked
              </h3>
              <p className="text-gray-600">
                Strict kitchen standards ensure every dish meets our high bar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-[#ff5722]" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                No Leftovers
              </h3>
              <p className="text-gray-600">
                Your meal is made when you order it. Fresh ingredients only.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-[#ff5722]" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                Not happy? We'll make it right. Your satisfaction is our priority.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#ff5722] to-[#ffa726] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl mb-4 text-white" style={{ fontWeight: 700 }}>
              We've Listened. We've Improved.
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your feedback matters. We've upgraded our kitchen processes and quality control to ensure every meal hits the mark. Taste the difference today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
