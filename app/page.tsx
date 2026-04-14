import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Hero />
      <Showcase />
      <Footer />
    </main>
  );
}