import Image from 'next/image';

// Yeh array real mein database/CMS se aayega, abhi sample data
const blogPosts = [
  {
    id: 1,
    title: "Dr. Martens – Geschenke, die Deine Liebsten auch noch nächstes Jahr tragen...",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/drmartens-hero.jpg", // apni real image path daal dena
    intro: "Dr. Martens ke gifts ke baare mein detail article yahan aayega...",
  },
  {
    id: 2,
    title: "Burberry-Geschenke. Personalisierung möglich.",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/burberry-hero.jpg",
    intro: "Burberry ke personalized gifts aur trends...",
  },
  {
    id: 3,
    title: "Mit Belstaff stilvoll aufsteigen: Phoenix Day ist da",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/belstaff-hero.jpg",
    intro: "Belstaff Phoenix Day collection ka full review...",
  },
  {
    id: 4,
    title: "Dein Herbst Outfit, präsentiert von Levi’s®",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/levis-herbst.jpg",
    intro: "Levi’s se perfect herbst outfits...",
  },
  {
    id: 5,
    title: "Das Must-have der Saison – Neue Trends 2025",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/trends-2025.jpg",
    intro: "2025 ke sabse must-have fashion trends...",
  },
];

export default function BlogPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  // ID se article find karo
  const article = blogPosts.find(post => post.id === id);

  // Agar article nahi mila to fallback
  if (!article) {
    return (
      <div className="min-h-screen bg-[#f8f7f5] flex items-center justify-center">
        <h1 className="text-4xl font-serif">Article Not Found</h1>
      </div>
    );
  }

  // Tailored products (tumhare original swim trunks wale rakhe hain, agar change karna ho to kar dena)
  const tailoredProducts = [
    {
      name: 'Orlebar Brown Bulldog printed swim trunks',
      originalPrice: 345.00,
      discountedPrice: 276.00,
      discount: '-20%',
      image: '/images/ob-bulldog-printed.jpg',
    },
    // ... baaki 3 same as before
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

  // Shorter, Bold, Sustainable products arrays (tumhare original code se copy-paste kar do agar rakhna hai)

  return (
    <div className="min-h-screen bg-[#f8f7f5] py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section – ab dynamic */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-center leading-tight">
          {article.title}
        </h1>

        <hr className="border-t border-black w-full mx-auto mb-8" />

        <div className="prose max-w-none text-lg md:text-xl leading-relaxed text-gray-800 mb-10">
          <p className="text-center md:text-left">
            {article.intro}
          </p>
        </div>

        <figure className="mb-8">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-md">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
            {article.title} hero image
          </figcaption>
        </figure>

        <p className="text-lg text-gray-600 text-center">
          By {article.author} • {article.date}
        </p>
      </div>

      {/* Blog Content – Trends (tumhare original 4 trends same rakhe) */}
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
                  alt="Tailored swim trunks"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                Tailored style – perfect 2025 vibe
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

        {/* Trend #2, #3, #4 – tumhare original code se copy-paste kar do */}
        {/* ... yahan tumhare Shorter Inseams, Bold Colors, Sustainable sections paste kar dena ... */}

      </div>

      {/* Newsletter Box */}
      <div className="max-w-4xl mx-auto mb-20 px-4">
        {/* tumhara newsletter box code yahan paste kar do */}
      </div>
    </div>
  );
}