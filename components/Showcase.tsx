export default function Showcase() {
  // Placeholder images for marquee
  const stickers = Array(8).fill("https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=300&h=300&fit=crop");

  return (
    <section id="shop" className="w-full min-h-screen bg-black pt-20 flex flex-col">
      
      {/* Row 1: Infinite Marquee */}
      <div className="h-48 md:h-64 border-y border-white/10 overflow-hidden relative flex items-center bg-white/5">
        <div className="flex w-[200%] animate-marquee">
          {stickers.map((src, i) => (
            <div key={i} className="w-1/8 px-4">
              <img src={src} alt="Sticker" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Split Products */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0">
        
        {/* Left: Poster */}
        <div className="relative group border-r border-white/10 flex items-center justify-center p-12 min-h-[50vh]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Neon Posters</h2>
            <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-neon-pink hover:text-white transition-colors duration-300 hover:shadow-neon-pink">
              Shop Posters
            </button>
          </div>
        </div>

        {/* Right: Sticker Pack */}
        <div className="relative group flex items-center justify-center p-12 min-h-[50vh]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596521864207-13abdb01c64e?q=80&w=800')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Hacker Packs</h2>
            <button className="bg-neon-pink text-black font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 hover:shadow-neon-pink">
              Shop Packs
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}