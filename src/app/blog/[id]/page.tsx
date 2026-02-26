import Image from 'next/image'

export default function BlogPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)

  // Sample data – real mein database ya file se le sakte ho
  const article = {
    id,
    title: `Fashion Article #${id}`,
    content: `Yeh full blog article hai ID ${id} ke liye. Yahan pura review, photos, tips likhe ja sakte hain. Lorem ipsum dolor sit amet...`,
    author: id % 2 === 0 ? 'ILENIA SARMAN' : 'GENEVA GARCIA',
  }

  const products = [
    { id: 1, name: 'Dr. Martens Boots', price: 169.99, image: '/images/product-1.jpg' },
    { id: 2, name: 'Burberry Scarf', price: 249.00, image: '/images/product-2.jpg' },
    { id: 3, name: 'Belstaff Jacket', price: 599.00, image: '/images/product-3.jpg' },
    { id: 4, name: 'Levi’s Jeans', price: 89.50, image: '/images/product-4.jpg' },
  ]

  return (
    <div className="min-h-screen bg-[#f8f7f5] py-12 px-4 sm:px-8 lg:px-16">
      {/* Blog Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Von {article.author} • {new Date().toLocaleDateString('de-DE')}
        </p>
        <div className="prose max-w-none text-lg leading-relaxed">
          <p>{article.content}</p>
          <p>Mehr Text, Bilder, Styling-Tipps etc. yahan aayenge...</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-10 text-center">
          Passende Produkte
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-gray-700 text-lg mb-4">{product.price.toFixed(2)} €</p>
                <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
                  In den Warenkorb
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}