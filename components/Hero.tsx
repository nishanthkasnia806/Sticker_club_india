"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const taglines = [
  "Peel. Stick. Dominate.",
  "Your Laptop Needs This.",
  "Premium Vinyl Aesthetics.",
  "Slap Them Everywhere."
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Placeholder - Replace with your actual hero image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1920&auto=format&fit=crop')" }} 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
        >
          StickerClubIndia<span className="text-neon-pink">.com</span>
        </motion.h1>
        
        <motion.p 
          key={taglineIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl md:text-2xl text-gray-300 font-light mb-8 h-8"
        >
          {taglines[taglineIndex]}
        </motion.p>

        <a 
          href="#shop"
          className="inline-block bg-transparent text-neon-pink font-bold py-3 px-8 rounded-full border-2 border-neon-pink shadow-neon-pink hover:shadow-neon-pink-hover hover:bg-neon-pink hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}