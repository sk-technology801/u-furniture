'use client'

import Image from 'next/image'
import FashionCard from '../components/FashionCard'

export default function Home() {
  // Women's Fashion articles
  const womensArticles = [
    { id: 1, title: 'Dr. Martens – Geschenke...', author: 'GENEVA GARCIA' },
    { id: 2, title: 'Burberry-Geschenke...', author: 'ILENIA SARMAN' },
    { id: 3, title: 'Mit Belstaff stilvoll...', author: 'GENEVA GARCIA' },
    { id: 4, title: 'Dein Herbst Outfit...', author: 'GENEVA GARCIA' },
    { id: 5, title: 'Das Must-have der Saison...', author: 'ILENIA SARMAN' },
  ]

  // Bed articles (sample – tum real titles daal sakte ho)
  const bedArticles = [
    { id: 6, title: 'Das perfekte Bett für erholsamen Schlaf 2025', author: 'EMMA TRIMBOLI' },
    { id: 7, title: 'Boxspringbett Trends – Luxus im Schlafzimmer', author: 'GENEVA GARCIA' },
    { id: 8, title: 'Nachhaltige Betten aus Holz und Naturmaterialien', author: 'ILENIA SARMAN' },
    { id: 9, title: 'Stauraumbetten – Platzsparend & stylish', author: 'GENEVA GARCIA' },
    { id: 10, title: 'Höhenverstellbare Betten für mehr Komfort', author: 'ILENIA SARMAN' },
  ]

  // Sofa articles
  const sofaArticles = [
    { id: 11, title: 'Modulare Sofas – Flexibel für jedes Wohnzimmer', author: 'EMMA TRIMBOLI' },
    { id: 12, title: 'Ecksofas 2025 – Die beliebtesten Modelle', author: 'GENEVA GARCIA' },
    { id: 13, title: 'Samt-Sofas – Luxuriöser Look für wenig Geld', author: 'ILENIA SARMAN' },
    { id: 14, title: 'Sofa mit Schlaffunktion – Praktisch & modern', author: 'GENEVA GARCIA' },
    { id: 15, title: 'Minimalistische Sofas in Skandinavischem Stil', author: 'ILENIA SARMAN' },
  ]

  // Chair articles
  const chairArticles = [
    { id: 16, title: 'Esszimmerstühle – Trends für 2025', author: 'EMMA TRIMBOLI' },
    { id: 17, title: 'Bürostühle mit ergonomischem Design', author: 'GENEVA GARCIA' },
    { id: 18, title: 'Designer-Sessel – Statement Pieces', author: 'ILENIA SARMAN' },
    { id: 19, title: 'Gartenstühle – Robust & stylish für draußen', author: 'GENEVA GARCIA' },
    { id: 20, title: 'Barhocker – Perfekt für die Küche oder Bar', author: 'ILENIA SARMAN' },
  ]

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-800 font-sans">
      {/* 1. Magazineize Title + Intro */}
      <section className="pt-16 pb-10 md:pb-16 pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-6">
          Magazineize
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-5xl">
          Unsere Redakteure recherchieren für dich die wichtigsten Trends des Jahres, suchen für dich den passenden Celebrity Looks zum Nachshoppen oder geben dir Antworten auf all deine Mode, Beauty und Interior Fragen. Und schau ruhig regelmäßig vorbei oder abonniere unseren Newsletter, denn jede Woche kommen neue Themen. Viel Spaß beim Lesen!
        </p>
      </section>

      {/* 2. Four Category Images */}
      <section className="pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-0 w-full">
          {/* Women's Fashion */}
          <div className="group relative overflow-hidden rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
            <Image
              src="/images/womens-fashion.jpg"
              alt="Women's Fashion"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 flex justify-center">
              <span className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 text-sm sm:text-base font-medium rounded-full shadow-md">
                Women's Fashion
              </span>
            </div>
          </div>

          {/* Men's Fashion */}
          <div className="group relative overflow-hidden rounded-xl lg:rounded-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
            <Image src="/images/mens-fashion.jpg" alt="Men's Fashion" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 flex justify-center">
              <span className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 text-sm sm:text-base font-medium rounded-full shadow-md">
                Men's Fashion
              </span>
            </div>
          </div>

          {/* Beauty */}
          <div className="group relative overflow-hidden rounded-xl lg:rounded-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
            <Image src="/images/beauty.jpg" alt="Beauty" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 flex justify-center">
              <span className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 text-sm sm:text-base font-medium rounded-full shadow-md">
                Beauty
              </span>
            </div>
          </div>

          {/* Interior */}
          <div className="group relative overflow-hidden rounded-xl lg:rounded-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
            <Image src="/images/interior.jpg" alt="Interior" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 flex justify-center">
              <span className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 text-sm sm:text-base font-medium rounded-full shadow-md">
                Interior
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Marken Section */}
      <section className="pb-20 md:pb-32">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 pb-8 md:pb-12 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide">
            Marken, die du im Auge behalten solltest
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0 w-full">
          {['CELINE', 'SANDRO', 'JACQUEMUS', 'LOEWE', 'THE ROW'].map((brand) => (
            <div
              key={brand}
              className="bg-[#f0ede8] flex items-center justify-center h-40 md:h-48 lg:h-64 border-r border-gray-200 last:border-r-0"
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wider text-gray-900">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Fashion Artikel Section */}
      <section className="pb-20 md:pb-32">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide mb-6 leading-tight">
            Fashion Artikel - Aktuelle Trends, wichtige Tipps und Antworten rund um Mode
          </h2>

          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-5xl">
            In unserer Fashion Ruprik findest du regelmäßig Artikel über die heißesten{' '}
            <span className="font-medium">Jeans</span>, <span className="font-medium">Schuh</span> oder Mode Trends im Allgemeinen sowie Stylingtipps wie
          </p>

          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-5xl mt-1">
            du bestimmte Kleidungsstücke am besten kombinieren kannst oder empfindliche Materialien wie{' '}
            <span className="font-medium">Seide</span> pflegen solltest. Kurz gesagt: Hier findest du
          </p>

          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-5xl mt-1">
            alle Antworten rund um das Thema Mode. Alle Fashion Artikel findest du{' '}
            <span className="underline hover:text-gray-700 transition-colors cursor-pointer">
              hier
            </span>.
          </p>
        </div>
      </section>

      {/* 5. Women's Fashion Cards */}
      <section className="pb-20 md:pb-32">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide">
            Women's Fashion
          </h2>
          <span className="text-lg md:text-xl font-medium text-gray-700 flex items-center gap-1">
            Zeig mir mehr &gt;
          </span>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-6 px-4 sm:px-6 md:px-8 lg:px-10">
            {womensArticles.map((article) => (
              <FashionCard
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bed Cards – same style */}
      <section className="pb-20 md:pb-32">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide">
            Bed
          </h2>
          <span className="text-lg md:text-xl font-medium text-gray-700 flex items-center gap-1">
            Zeig mir mehr &gt;
          </span>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-6 px-4 sm:px-6 md:px-8 lg:px-10">
            {bedArticles.map((article) => (
              <FashionCard
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Sofa Cards */}
      <section className="pb-20 md:pb-32">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide">
            Sofa
          </h2>
          <span className="text-lg md:text-xl font-medium text-gray-700 flex items-center gap-1">
            Zeig mir mehr &gt;
          </span>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-6 px-4 sm:px-6 md:px-8 lg:px-10">
            {sofaArticles.map((article) => (
              <FashionCard
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Chair Cards */}
      <section className="pb-20 md:pb-32">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide">
            Chair
          </h2>
          <span className="text-lg md:text-xl font-medium text-gray-700 flex items-center gap-1">
            Zeig mir mehr &gt;
          </span>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-6 px-4 sm:px-6 md:px-8 lg:px-10">
            {chairArticles.map((article) => (
              <FashionCard
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.author}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}