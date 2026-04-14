"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-neon-pink/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white hover:text-neon-pink transition-colors"
        >
          STICKER<span className="text-neon-pink">CLUB</span>
        </Link>

        {/* Center: Search */}
        <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 w-1/3 border border-white/20 focus-within:border-neon-pink transition-colors">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search stickers..."
            className="bg-transparent border-none outline-none text-white ml-2 w-full placeholder-gray-400"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6 text-white">
          <Link href="#" className="hover:text-neon-pink transition">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" className="hover:text-neon-pink transition">
            <FaTwitter size={20} />
          </Link>
          <Link href="/login" className="hover:text-neon-pink transition">
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}