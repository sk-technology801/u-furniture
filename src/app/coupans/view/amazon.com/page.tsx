// app/components/AmazonHeroAndOffers.tsx
export default function AmazonHeroAndOffers() {
  return (
    <div className="bg-white">
      {/* Hero / Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          {/* Amazon logo circle */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-[#131921] flex items-center justify-center shadow-lg relative overflow-hidden border-4 border-[#ff9900]/40">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-black text-white tracking-tight leading-none">
                  amazon
                </div>
                <div className="mt-2">
                  <svg
                    className="w-28 md:w-32 mx-auto"
                    viewBox="0 0 148 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M74 0L0 32H148L74 0Z"
                      fill="#FF9900"
                    />
                    {/* Simplified arrow/smile – replace with better SVG if needed */}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Amazon Promo Codes & Coupons
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              50 VERIFIED OFFERS ON FEBRUARY 27TH, 2026
            </p>

            <p className="mt-6 text-sm text-gray-600 max-w-2xl">
              When you buy through links on RetailMeNot we may earn a commission.
            </p>
          </div>
        </div>
      </div>

      {/* Main content – left sidebar (stats + contributor) + right offers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT SIDE – Stats + Top offers list + Contributor box */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                TODAY'S TOP AMAZON OFFERS:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• 10% Cash Back on Amazon Devices</li>
                <li>• Today's Deals! Up to $50 Off Select Items w/ Coupon</li>
                {/* Add more if needed */}
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-sm">
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>Total Offers</dt>
                  <dd className="font-medium">50</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Coupon Codes</dt>
                  <dd className="font-medium">1</dd>
                </div>
                <div className="flex justify-between">
                  <dt>In-Store Coupons</dt>
                  <dd className="font-medium">0</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Free Shipping Deals</dt>
                  <dd className="font-medium">1</dd>
                </div>
              </dl>
            </div>

            {/* Contributor box on LEFT side */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-base font-bold text-gray-800 uppercase tracking-wide mb-5">
                THIS PAGE HAS BEEN UPDATED BY
              </h4>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
                    {/* Real Ben Whitehead image URL daal do ya placeholder */}
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                      alt="Ben Whitehead"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h5 className="text-xl font-bold text-gray-900">Ben Whitehead</h5>
                  <p className="text-gray-600 font-medium mb-4">Content Writer</p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ben is a writer and editor with more than 25 years of insider shopping experience in retail and e-commerce. He thanks his deal-spotting ability to a grandfather who would buy anything at a good price, a mother who would buy everything just to own it, and his dogs, Pugly and Dorbs, who simply cost too much.
                  </p>

                  <a
                    href="#"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    See Bio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Offer cards only */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cash Back Offer Card */}
            <div className="border border-cyan-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-cyan-50 px-5 py-3 flex items-center justify-between border-b border-cyan-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💸</span>
                  <span className="font-semibold text-cyan-800">Online Cash Back</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-shrink-0 text-center sm:text-left min-w-[140px]">
                    <div className="text-5xl md:text-6xl font-extrabold text-cyan-600 leading-none">
                      10%
                    </div>
                    <div className="text-xl font-bold text-cyan-600 mt-1">
                      BACK
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      10% Cash Back On Amazon Devices
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm text-gray-600">
                      <span className="text-purple-700 font-medium">Exclusive</span>
                      <span>380 interested users</span>
                      <span className="text-amber-700 font-medium">Limited time</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-10 rounded-full text-lg transition-colors">
                        Get Reward
                      </button>
                      <button className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
                        See Details <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sale Offer Card */}
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0 text-center sm:text-left min-w-[140px]">
                  <div className="text-5xl md:text-6xl font-extrabold text-purple-600 leading-none">
                    50%
                  </div>
                  <div className="text-xl font-bold text-purple-600 mt-1">
                    OFF
                  </div>
                  <span className="inline-block mt-3 px-4 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                    Sale
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Up To 50% Off Top Deals On Amazon Storefront
                  </h3>
                  <p className="text-gray-600 mb-4">
                    142 interested users
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-10 rounded-full text-lg transition-colors">
                      Get Deal
                    </button>
                    <button className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
                      See Details <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Aur cards add kar sakte ho yahan */}
          </div>
        </div>
      </div>
    </div>
  );
}