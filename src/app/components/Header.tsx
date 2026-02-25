// components/Header.tsx   (or src/app/components/Header.tsx)

import Link from "next/link";
import { Search, Heart, User } from "lucide-react";

// Delete or comment this line ↓
// import "./Header.css";

const navItems = [
  { label: "Women's Fashion", href: "/womens-fashion" },
  { label: "Men's Fashion", href: "/mens-fashion" },
  { label: "Home", href: "/home" },
  { label: "Magazine", href: "/magazine" },
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="header-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

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