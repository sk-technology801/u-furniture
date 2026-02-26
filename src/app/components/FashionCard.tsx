// components/FashionCard.tsx
'use client'

import Image from 'next/image'

interface FashionCardProps {
  id: number
  title: string
  author: string
  image: string
}

export default function FashionCard({ id, title, author, image }: FashionCardProps) {
  const handleClick = () => {
    // ← your click logic here
    console.log(`Artikel ${id} wurde geklickt → Blog + Produkte öffnen`)
    
    alert(
      `Blog-Artikel "${title}" wird geöffnet\n\n` +
      `Später hier:\n` +
      `• Vollständiger Text\n` +
      `• Unten Produktkarten mit Bild, Preis, etc.`
    )
    
    // Future version example:
    // window.location.href = `/blog/${id}`
    // or with useRouter: router.push(`/blog/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="
        group cursor-pointer
        w-[280px] lg:w-[320px]
        bg-white
        overflow-hidden
        shadow-sm hover:shadow-md
        transition-all duration-300
        flex flex-col h-full
      "
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden">
        <Image
          src={image || '/images/placeholder.jpg'}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Black bar */}
      <div className="bg-black text-white p-4 flex-1 flex flex-col">
        <span className="text-xs uppercase tracking-wider mb-2 opacity-80">
          FASHION | ANZEIGE
        </span>
        <h3 className="text-base md:text-lg font-medium leading-tight mb-3 line-clamp-3">
          {title}
        </h3>
        <p className="text-xs uppercase tracking-wider opacity-80 mt-auto">
          VON {author}
        </p>
      </div>
    </div>
  )
}