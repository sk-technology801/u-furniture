'use client';  // ← important – make this a client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User } from "lucide-react";

const navItems = [
  { label: "Women's Fashion", href: "/womens-fashion" },
  { label: "Men's Fashion", href: "/mens-fashion" },
  { label: "Home", href: "/home" },
  { label: "Magazine", href: "/magazine" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="header-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* logo and icons remain the same */}
        <div className="header-logo-wrapper">
          <Link href="/" className="header-logo">
            STYLIGHT
          </Link>
        </div>

        <div className="header-actions">
          <button className="header-icon-btn" aria-label="Search">
            <Search size={20} strokeWidth={2.1} />
          </button>
          <button className="header-icon-btn" aria-label="Wishlist">
            <Heart size={20} strokeWidth={2.1} />
          </button>
          <button className="header-icon-btn" aria-label="Account">
            <User size={20} strokeWidth={2.1} />
          </button>
        </div>
      </div>
    </header>
  );
}