import Image from 'next/image';

// Pura blogPosts array – sab categories cover kar diye
const blogPosts = [
  // Women's Fashion (IDs 1-5)
  {
    id: 1,
    category: "Women's Fashion",
    title: "Dr. Martens – Geschenke, die Deine Liebsten auch noch nächstes Jahr tragen...",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/drmartens-hero.jpg",
    intro: "Dr. Martens ke timeless gifts aur winter styles ke baare mein full guide...",
  },
  {
    id: 2,
    category: "Women's Fashion",
    title: "Burberry-Geschenke. Personalisierung möglich.",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/burberry-hero.jpg",
    intro: "Burberry ke personalized luxury gifts aur monogram options...",
  },
  {
    id: 3,
    category: "Women's Fashion",
    title: "Mit Belstaff stilvoll aufsteigen: Phoenix Day ist da",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/belstaff-hero.jpg",
    intro: "Belstaff Phoenix Day collection – leather jackets aur boots ka review...",
  },
  {
    id: 4,
    category: "Women's Fashion",
    title: "Dein Herbst Outfit, präsentiert von Levi’s®",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/levis-herbst.jpg",
    intro: "Levi’s se perfect herbst aur denim outfits ideas...",
  },
  {
    id: 5,
    category: "Women's Fashion",
    title: "Das Must-have der Saison – Neue Trends 2025",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/trends-2025.jpg",
    intro: "2025 ke sabse must-have women's fashion trends...",
  },

  // Bed (IDs 6-10)
  {
    id: 6,
    category: "Bed",
    title: "Das perfekte Bett für erholsamen Schlaf 2025",
    author: "EMMA TRIMBOLI",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/bed-hero.jpg",
    intro: "2025 mein best beds for better sleep aur comfort...",
  },
  {
    id: 7,
    category: "Bed",
    title: "Boxspringbett Trends – Luxus im Schlafzimmer",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/boxspring-hero.jpg",
    intro: "Luxury boxspring beds ke latest trends aur features...",
  },
  {
    id: 8,
    category: "Bed",
    title: "Nachhaltige Betten aus Holz und Naturmaterialien",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/eco-bed-hero.jpg",
    intro: "Eco-friendly beds made from sustainable wood...",
  },
  {
    id: 9,
    category: "Bed",
    title: "Stauraumbetten – Platzsparend & stylish",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/storage-bed-hero.jpg",
    intro: "Space-saving beds with storage for small rooms...",
  },
  {
    id: 10,
    category: "Bed",
    title: "Höhenverstellbare Betten für mehr Komfort",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/adjustable-bed-hero.jpg",
    intro: "Adjustable beds for ultimate comfort...",
  },

  // Sofa (IDs 11-15)
  {
    id: 11,
    category: "Sofa",
    title: "Modulare Sofas – Flexibel für jedes Wohnzimmer",
    author: "EMMA TRIMBOLI",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/modular-sofa-hero.jpg",
    intro: "Modular sofas that adapt to your living space...",
  },
  {
    id: 12,
    category: "Sofa",
    title: "Ecksofas 2025 – Die beliebtesten Modelle",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/ecksofa-hero.jpg",
    intro: "Corner sofas – top models for 2025...",
  },
  {
    id: 13,
    category: "Sofa",
    title: "Samt-Sofas – Luxuriöser Look für wenig Geld",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/velvet-sofa-hero.jpg",
    intro: "Velvet sofas with luxury feel on budget...",
  },
  {
    id: 14,
    category: "Sofa",
    title: "Sofa mit Schlaffunktion – Praktisch & modern",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/sleeper-sofa-hero.jpg",
    intro: "Sofas with sleeper function for guests...",
  },
  {
    id: 15,
    category: "Sofa",
    title: "Minimalistische Sofas in Skandinavischem Stil",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/scandi-sofa-hero.jpg",
    intro: "Scandinavian minimalist sofas for clean look...",
  },

  // Chair (IDs 16-20)
  {
    id: 16,
    category: "Chair",
    title: "Esszimmerstühle – Trends für 2025",
    author: "EMMA TRIMBOLI",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/dining-chair-hero.jpg",
    intro: "Dining chair trends for modern homes...",
  },
  {
    id: 17,
    category: "Chair",
    title: "Bürostühle mit ergonomischem Design",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/office-chair-hero.jpg",
    intro: "Ergonomic office chairs for better posture...",
  },
  {
    id: 18,
    category: "Chair",
    title: "Designer-Sessel – Statement Pieces",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/designer-chair-hero.jpg",
    intro: "Luxury designer armchairs as focal points...",
  },
  {
    id: 19,
    category: "Chair",
    title: "Gartenstühle – Robust & stylish für draußen",
    author: "GENEVA GARCIA",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/garden-chair-hero.jpg",
    intro: "Durable and stylish outdoor chairs...",
  },
  {
    id: 20,
    category: "Chair",
    title: "Barhocker – Perfekt für die Küche oder Bar",
    author: "ILENIA SARMAN",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    heroImage: "/images/bar-stool-hero.jpg",
    intro: "Best bar stools for kitchen and home bar...",
  },
];

export default function BlogPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  // ID se article find karo
  const article = blogPosts.find(post => post.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f8f7f5] flex items-center justify-center">
        <h1 className="text-4xl font-serif">Article Not Found</h1>
      </div>
    );
  }

  // Tailored products (sab blogs mein same rakha – agar category-wise change chahiye to bata dena)
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

  // ... shorterProducts, boldProducts, sustainableProducts – tumhare original code se copy-paste kar do yahan

  return (
    <div className="min-h-screen bg-[#f8f7f5] py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section – Dynamic */}
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
            {article.category} hero image
          </figcaption>
        </figure>

        <p className="text-lg text-gray-600 text-center">
          By {article.author} • {article.date}
        </p>
      </div>

      {/* Blog Content – Same structure for all */}
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

        {/* Trend #2, #3, #4 – tumhare original code yahan paste kar do */}
        {/* ... copy-paste your full Trend #2, #3, #4 sections here ... */}

      </div>

      {/* Newsletter Box */}
      <div className="max-w-4xl mx-auto mb-20 px-4">
        {/* tumhara newsletter box code yahan paste kar do */}
      </div>
    </div>
  );
}