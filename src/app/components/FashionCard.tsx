'use client'

import { useRouter } from 'next/navigation'

export default function FashionCard({
  id,
  title,
  author,
}: {
  id: number
  title: string
  author: string
}) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/blog/${id}`)}
      className="
        group cursor-pointer
        w-[300px] flex-shrink-0
        bg-white overflow-hidden
        shadow-sm hover:shadow-xl transition-all duration-300
      "
    >
      <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
        {/* Placeholder — real image daal dena */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Bild
        </div>
      </div>

      <div className="bg-black text-white p-5">
        <div className="text-xs uppercase tracking-wider opacity-70 mb-3">
          FASHION | ANZEIGE
        </div>
        <h3 className="text-base font-medium leading-tight mb-4 line-clamp-3">
          {title}
        </h3>
        <p className="text-xs uppercase tracking-wider opacity-70">
          VON {author}
        </p>
      </div>
    </div>
  )
}