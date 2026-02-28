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
                    <path d="M74 0L0 32H148L74 0Z" fill="#FF9900" />
                    {/* You can replace with real Amazon smile/arrow SVG if you want */}
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

      {/* Main content – left sidebar + right offers */}
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
                <li>• Free Shipping on Orders Over $35</li>
                <li>• Prime Exclusive: Extra 15% Off Select Brands</li>
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

            {/* Contributor box */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-base font-bold text-gray-800 uppercase tracking-wide mb-5">
                THIS PAGE HAS BEEN UPDATED BY
              </h4>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                      alt="Ben Whitehead"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-gray-900">Ben Whitehead</h5>
                  <p className="text-gray-600 font-medium mb-4">Content Writer</p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ben is a writer and editor with more than 25 years of insider shopping experience in retail and e-commerce. He thanks his deal-spotting ability to a grandfather who would buy anything at a good price, a mother who would buy everything just to own it, and his dogs, Pugly and Dorbs, who simply cost too much.
                  </p>

                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                    See Bio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Offer cards */}
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
                    <div className="text-xl font-bold text-cyan-600 mt-1">BACK</div>
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
                  <div className="text-xl font-bold text-purple-600 mt-1">OFF</div>
                  <span className="inline-block mt-3 px-4 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                    Sale
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Up To 50% Off Top Deals On Amazon Storefront
                  </h3>
                  <p className="text-gray-600 mb-4">142 interested users</p>

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

            {/* You can add more offer cards here */}
          </div>
        </div>
      </div>

      {/* AMAZON FEATURED ARTICLES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
          AMAZON FEATURED ARTICLES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-6 lg:gap-8">
          {/* Left column - Image + Prime text */}
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
              <img
                src="https://m.media-amazon.com/images/I/81mDHxT8zZL._SX3000_.jpg"
                alt="Amazon background"
                className="w-full h-[260px] md:h-[320px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 px-8 py-5 rounded-lg shadow-md">
                  <span className="text-4xl md:text-5xl font-black text-[#FF9900] tracking-tight">
                    amazon
                  </span>
                  <div className="w-10 h-6 mx-auto mt-1">
                    <svg viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4 5.2c0-1.8-.9-2.9-2.6-2.9-1.1 0-2 .4-2.7 1.1l-.7-1h-3v11.2h3.3v-3.8c.6.6 1.4 1 2.4 1 1.8 0 3.3-1.3 3.3-3.6v-.9zm-3.1 3.2c-.6 0-1.1-.5-1.1-1.2s.5-1.2 1.1-1.2 1.1.5 1.1 1.2-.5 1.2-1.1 1.2zM18.3 2.3h-3.3v11.2h3.3V2.3zM23.5 2.3h-3.3v11.2h3.3V2.3zM31.8 5.2c0-1.8-.9-2.9-2.6-2.9-1.1 0-2 .4-2.7 1.1l-.7-1h-3v11.2h3.3v-3.8c.6.6 1.4 1 2.4 1 1.8 0 3.3-1.3 3.3-3.6v-.9zm-3.1 3.2c-.6 0-1.1-.5-1.1-1.2s.5-1.2 1.1-1.2 1.1.5 1.1 1.2-.5 1.2-1.1 1.2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Free Perks with Amazon Prime Membership
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                You can get so much more than free shipping at Amazon. There's free music, memberships,
                books, apps and more for the taking.
              </p>
              <p className="text-sm text-gray-500 italic">By Lisa Davis</p>
            </div>
          </div>

          {/* Right column - Deals */}
          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <div className="text-3xl md:text-4xl font-bold text-purple-700">
                  UP TO <span className="text-5xl">50%</span> OFF
                </div>
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded">
                  Sale
                </span>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Up To 50% Off The Easter Shop
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow transition-colors min-w-[140px]">
                  Get Deal
                </button>

                <div className="text-sm text-gray-600 space-x-4">
                  <span className="text-purple-600 font-medium">171 interested users</span>
                  <span className="text-pink-600 font-medium">Limited time</span>
                </div>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                See Details +
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <div className="text-3xl md:text-4xl font-bold text-purple-700">
                  UP TO <span className="text-5xl">60%</span> OFF
                </div>
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded">
                  Sale
                </span>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Amazon's Top Deals Of The Day | Up To 60% Off
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow transition-colors min-w-[140px]">
                  Get Deal
                </button>

                <div className="text-sm text-gray-600">
                  <span className="text-purple-600 font-medium">958 interested users</span>
                </div>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                See Details +
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/*     NEW SECTION: Submit Coupon + About + Returns + 3 Deals     */}
      {/* ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-8 lg:gap-10">
          {/* LEFT SIDEBAR */}
          <div className="space-y-8 lg:sticky lg:top-8 lg:self-start">
            {/* Submit a Coupon */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <a
                href="#"
                className="flex items-center justify-between text-purple-600 hover:text-purple-800 font-medium text-lg"
              >
                <span>SUBMIT A COUPON</span>
                <span className="text-xl">↗</span>
              </a>
            </div>

            {/* About Amazon */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">ABOUT AMAZON</h3>

              <div className="flex items-center gap-2">
                <div className="flex">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                  <span className="text-yellow-400 text-xl">☆</span>
                </div>
                <span className="text-sm text-gray-600">3.5 Rating (669)</span>
              </div>

              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Log In (669)
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>☎</span> 206 266-1000
                </p>
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>
                    410 Terry Ave N, Seattle, WA
                    <br />
                    98109
                  </span>
                </p>
              </div>
            </div>

            {/* Return & Refund Policy */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                WHAT IS AMAZON'S RETURN AND REFUND POLICY?
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Amazon's return policy depends on the items that customers purchase, but most items sold
                and shipped by Amazon are eligible for free returns. Customized product returns are
                accepted within 14 days of purchase. Electronics can be returned within 30 days of
                purchase for a full refund.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – Deal Cards */}
          <div className="space-y-6">
            {/* Deal 1: Free Shipping */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                <div className="text-4xl font-bold text-green-600">FREE</div>
                <div className="text-3xl font-bold text-green-600">SHIPPING</div>
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded">
                  Sale
                </span>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Free Shipping On Orders $35+
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow transition-colors min-w-[140px]">
                  Get Deal
                </button>

                <div className="text-sm text-gray-600">
                  <span className="text-purple-600 font-medium">50 interested users</span>
                </div>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                See Details +
              </a>
            </div>

            {/* Deal 2: 60% Off Haul */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                <div className="text-4xl font-bold text-purple-700">UP TO</div>
                <div className="text-5xl font-bold text-purple-700">60%</div>
                <div className="text-3xl font-bold text-purple-700">OFF</div>
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded">
                  Sale
                </span>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Save Up To 60% Off Amazon Haul + Deals As Low As $2
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow transition-colors min-w-[140px]">
                  Get Deal
                </button>

                <div className="text-sm text-gray-600">
                  <span className="text-purple-600 font-medium">8 interested users</span>
                </div>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                See Details +
              </a>
            </div>

            {/* Deal 3: Early Easter Deals */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                <div className="text-4xl font-bold text-purple-700">UP TO</div>
                <div className="text-5xl font-bold text-purple-700">60%</div>
                <div className="text-3xl font-bold text-purple-700">OFF</div>
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded">
                  Sale
                </span>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Up To 60% Off Early Easter Deals
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow transition-colors min-w-[140px]">
                  Get Deal
                </button>

                <div className="text-sm text-gray-600 space-x-3">
                  <span className="text-purple-600 font-medium">12 interested users</span>
                  <span className="text-pink-600 font-medium">Limited time</span>
                </div>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                See Details +
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}                                         