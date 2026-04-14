import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">
          STICKER<span className="text-neon-pink">CLUB</span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
          <Link href="#" className="hover:text-neon-pink transition">Conditions of Use & Sale</Link>
          <Link href="#" className="hover:text-neon-pink transition">Privacy Notice</Link>
          <Link href="#" className="hover:text-neon-pink transition">Interest-Based Ads</Link>
        </div>
        
        <p className="text-gray-600 text-sm">
          © 2026 Sticker Club India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}