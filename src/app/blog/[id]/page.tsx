import Image from 'next/image';

export default function BlogPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  // Article metadata
  const article = {
    title: "The 5 best swim trunk trends for men in 2025",
    author: id % 2 === 0 ? "ILENIA SARMAN" : "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/man-blue-trunks-white-surfboard-beach.jpg",
  };

  // Tailored products
  const tailoredProducts = [
    {
      name: 'Orlebar Brown Bulldog printed swim trunks',
      originalPrice: 345.00,
      discountedPrice: 276.00,
      discount: '-20%',
      image: '/images/ob-bulldog-printed.jpg',
    },
    {
      name: 'Orlebar Brown Mens Bulldog Piped Nylon',
      originalPrice: 345.00,
      discountedPrice: 266.00,
      discount: '-30%',
      image: '/images/ob-piped-nylon.jpg',
    },
    {
      name: 'Orlebar Brown Bulldog Drawcord striped',
      originalPrice: 380.00,
      discountedPrice: 266.00,
      discount: '-30%',
      image: '/images/ob-striped.jpg',
    },
    {
      name: 'Orlebar Brown Mens Bulldog Nylon Swim Shorts',
      originalPrice: 245.00,
      discountedPrice: 245.00,
      discount: '',
      image: '/images/ob-nylon-blue.jpg',
    },
  ];

  // Shorter Inseams products
  const shorterProducts = [
    {
      name: 'Chubbies 5.5" The Everywear',
      originalPrice: 79.50,
      discountedPrice: 59.50,
      discount: '-25%',
      image: '/images/chubbies-every.jpg',
    },
    {
      name: 'Speedo Volley Swim Trunk 5"',
      originalPrice: 65.00,
      discountedPrice: 52.00,
      discount: '-20%',
      image: '/images/speedo-volley.jpg',
    },
    {
      name: 'Bather 5" Volley Trunk',
      originalPrice: 98.00,
      discountedPrice: 78.00,
      discount: '-20%',
      image: '/images/bather-volley.jpg',
    },
    {
      name: 'Rhone Commuter Short 5"',
      originalPrice: 88.00,
      discountedPrice: 88.00,
      discount: '',
      image: '/images/rhone-commuter.jpg',
    },
  ];

  // Bold Colors & Prints products
  const boldProducts = [
    {
      name: 'Bather Floral Print Trunk',
      originalPrice: 98.00,
      discountedPrice: 78.00,
      discount: '-20%',
      image: '/images/bather-floral.jpg',
    },
    {
      name: 'Orlebar Brown Electric Blue',
      originalPrice: 245.00,
      discountedPrice: 196.00,
      discount: '-20%',
      image: '/images/ob-electric.jpg',
    },
    {
      name: 'Chubbies Pastel Sorbet',
      originalPrice: 69.50,
      discountedPrice: 55.00,
      discount: '-20%',
      image: '/images/chubbies-pastel.jpg',
    },
    {
      name: 'Vuori Vibrant Print Short',
      originalPrice: 68.00,
      discountedPrice: 68.00,
      discount: '',
      image: '/images/vuori-vibrant.jpg',
    },
  ];

  // Sustainable products
  const sustainableProducts = [
    {
      name: 'Patagonia Stretch Wavefarer',
      originalPrice: 89.00,
      discountedPrice: 71.00,
      discount: '-20%',
      image: '/images/patagonia-wavefarer.jpg',
    },
    {
      name: 'Fair Harbor Recycled Anchor',
      originalPrice: 98.00,
      discountedPrice: 78.00,
      discount: '-20%',
      image: '/images/fair-harbor-recycled.jpg',
    },
    {
      name: 'Vuori Eco Banks Short',
      originalPrice: 68.00,
      discountedPrice: 54.00,
      discount: '-20%',
      image: '/images/vuori-eco.jpg',
    },
    {
      name: 'Outerknown Recycled Volley',
      originalPrice: 98.00,
      discountedPrice: 98.00,
      discount: '',
      image: '/images/outerknown-recycled.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f5] py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-center leading-tight">
          {article.title}
        </h1>

        <hr className="border-t border-black w-full mx-auto mb-8" />

        <div className="prose max-w-none text-lg md:text-xl leading-relaxed text-gray-800 mb-10">
          <p className="text-center md:text-left">
            Summer is so close you can almost smell the sea breeze! If maritime holidays and pool parties are on your calendar for the next few months, why not update your{' '}
            <span className="font-semibold underline decoration-blue-500 decoration-2 underline-offset-4">swimwear collection</span>{' '}
            with the latest trends? Here are the{' '}
            <span className="font-semibold underline decoration-blue-500 decoration-2 underline-offset-4">five hot styles</span>{' '}
            that, according to{' '}
            <span className="font-semibold underline decoration-blue-500 decoration-2 underline-offset-4">the experts</span>,
            are guaranteed to be all the rage this year.
          </p>
        </div>

        <figure className="mb-8">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-md">
            <Image
              src={article.heroImage}
              alt="A man standing on a white beach. He's wearing bright blue swim trunks and holding a white surfboard."
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
            A man standing on a white beach. He's wearing bright blue swim trunks and holding a white surfboard. UNSPLASH
          </figcaption>
        </figure>

        <p className="text-lg text-gray-600 text-center">
          By {article.author} • {article.date}
        </p>
      </div>

      {/* Blog Content – Trends */}
      <div className="max-w-4xl mx-auto mb-20 space-y-20">
        {/* Matters of length */}
        <div className="prose prose-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-left">
            Matters of length
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Before diving into the nitty gritty of the <span className="font-semibold underline decoration-blue-500 decoration-2 underline-offset-4">trendiest men’s swimwear</span>,
            it’s time to answer the question on everyone’s lips: <span className="font-semibold underline decoration-blue-500 decoration-2 underline-offset-4">what length swim trunks are in style for summer 2025</span>?
            The answer, similarly to last summer, is 1970s-inspired, <span className="font-semibold">short, short trunks</span>.
            Knee-grazing board shorts? Unequivocally out. Inseams five inches and below? So in!
          </p>
        </div>

        {/* Trend #1: Tailored */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-light mb-6">Trend #1: Tailored</h2>

            <div className="prose prose-lg text-gray-800 mb-10">
              <p>
                This year, swimwear trends for men lean <strong>decidedly formal</strong>—or at least as formal as you can be with your toes in the sand—, with <strong>tailored styles</strong> taking over their drawstring counterparts. Orlebar Brown is one of the most well-known and iconic brands that mastered this style. Whether you go monochrome or decide for a fun print, tailored trunks will take you effortlessly <strong>from beach to bar</strong>.
              </p>
            </div>

            <figure className="mb-10">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/trend-tailored-swim-trunks.jpg"
                  alt="Man in tailored short swim trunks with side stripes"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                Man rocking tailored swim trunks with side stripes – perfect 2025 vibe
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {tailoredProducts.map((product, index) => (
                <div key={index} className="text-center relative">
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="relative h-48 mb-3 rounded overflow-hidden shadow-sm">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex justify-center mb-2">
                    <span className="text-red-500 text-xl">♥</span>
                  </div>
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-sm text-gray-700">
                    {product.discountedPrice && product.discountedPrice < product.originalPrice ? (
                      <>
                        <span className="line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>{' '}
                        ${product.discountedPrice.toFixed(2)}
                      </>
                    ) : (
                      `$${product.originalPrice.toFixed(2)}`
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">DELIVERY COSTS APPLY</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trend #2: Shorter Inseams */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-light mb-6">Trend #2: Shorter Inseams</h2>

            <div className="prose prose-lg text-gray-800 mb-10">
              <p>
                2025 mein shorter inseams (5 inches aur below) sabse fast-growing trend hai. Volley-style trunks dominate kar rahe hain – baggy board shorts out, thighs show karne wala modern fit in. Speedo aur experts ke mutabiq yeh length flattering aur confident look deta hai, especially athletic builds ke liye.
              </p>
            </div>

            <figure className="mb-10">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/trend-shorter-inseam.jpg"
                  alt="Man in short 5-inch inseam swim trunks on beach"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                Short inseam trunks in action – 2025's fastest-growing style
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {shorterProducts.map((product, index) => (
                <div key={index} className="text-center relative">
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="relative h-48 mb-3 rounded overflow-hidden shadow-sm">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex justify-center mb-2">
                    <span className="text-red-500 text-xl">♥</span>
                  </div>
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-sm text-gray-700">
                    {product.discountedPrice && product.discountedPrice < product.originalPrice ? (
                      <>
                        <span className="line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>{' '}
                        ${product.discountedPrice.toFixed(2)}
                      </>
                    ) : (
                      `$${product.originalPrice.toFixed(2)}`
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">DELIVERY COSTS APPLY</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trend #3: Bold Colors & Prints */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-light mb-6">Trend #3: Bold Colors & Prints</h2>

            <div className="prose prose-lg text-gray-800 mb-10">
              <p>
                Electric blues, sorbet pastels, vibrant florals, iridescent shines aur retro patterns bohot chal rahe hain. Fun aur eye-catching prints mein brands jaise Bather aur Chubbies dominate kar rahe hain – yeh trunks boring solid colors se bohot zyada standout karte hain summer vibe ke liye.
              </p>
            </div>

            <figure className="mb-10">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/trend-bold-prints.jpg"
                  alt="Man in bold patterned swim trunks"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                Vibrant bold prints dominating 2025 swim trunks
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {boldProducts.map((product, index) => (
                <div key={index} className="text-center relative">
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="relative h-48 mb-3 rounded overflow-hidden shadow-sm">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex justify-center mb-2">
                    <span className="text-red-500 text-xl">♥</span>
                  </div>
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-sm text-gray-700">
                    {product.discountedPrice && product.discountedPrice < product.originalPrice ? (
                      <>
                        <span className="line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>{' '}
                        ${product.discountedPrice.toFixed(2)}
                      </>
                    ) : (
                      `$${product.originalPrice.toFixed(2)}`
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">DELIVERY COSTS APPLY</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trend #4: Sustainable & Performance Fabrics */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-light mb-6">Trend #4: Sustainable & Performance Fabrics</h2>

            <div className="prose prose-lg text-gray-800 mb-10">
              <p>
                Eco-friendly aur high-performance fabrics jaise recycled nylon, quick-dry, compression liners aur four-way stretch bohot popular hain. Brands like Patagonia, Fair Harbor aur Vuori lead kar rahe hain – yeh trunks comfortable, durable aur beach-to-street versatile hain, planet ke liye bhi achhe.
              </p>
            </div>

            <figure className="mb-10">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/trend-sustainable-swim.jpg"
                  alt="Man in sustainable recycled swim trunks"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                Sustainable performance trunks – eco-friendly 2025 essential
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {sustainableProducts.map((product, index) => (
                <div key={index} className="text-center relative">
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="relative h-48 mb-3 rounded overflow-hidden shadow-sm">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex justify-center mb-2">
                    <span className="text-red-500 text-xl">♥</span>
                  </div>
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-sm text-gray-700">
                    {product.discountedPrice && product.discountedPrice < product.originalPrice ? (
                      <>
                        <span className="line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>{' '}
                        ${product.discountedPrice.toFixed(2)}
                      </>
                    ) : (
                      `$${product.originalPrice.toFixed(2)}`
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">DELIVERY COSTS APPLY</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Box – yahan Recommended Products ki jagah add kiya */}
      <div className="max-w-4xl mx-auto mb-20 px-4">
        <div className="border-t-2 border-b-2 border-black py-12 px-8 bg-white shadow-md">
          {/* Author & Social Icons */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-medium text-gray-600">BY</p>
                <p className="font-serif text-lg font-light">EMMA TRIMBOLI</p>
              </div>
            </div>

            <div className="flex space-x-5">
              <a href="#" className="text-gray-700 hover:text-black text-2xl">𝕏</a>
              <a href="#" className="text-gray-700 hover:text-black text-2xl">📌</a>
            </div>
          </div>

          {/* Newsletter Content */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 leading-tight">
              Don’t miss out on the latest fashion, beauty and lifestyle trends!
            </h3>

            <p className="text-lg text-gray-700 mb-2">
              Get inspiration and style tips delivered straight to your inbox
            </p>

            <form className="max-w-lg mx-auto mt-8">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b-2 border-black pb-4 text-center text-lg focus:outline-none bg-transparent placeholder-gray-500 mb-8"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-full font-medium text-lg hover:bg-gray-900 transition"
              >
                Subscribe to our Newsletter
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-8">
              You can opt out of these updates at any time. Information about our data privacy policy can be found{' '}
              <a href="#" className="underline hover:text-black">here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}