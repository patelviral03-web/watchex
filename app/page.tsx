import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WatchAssembly from '@/components/WatchAssembly';
import Showcase from '@/components/Showcase';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <WatchAssembly />
      <Showcase />
      <Features />
      <Footer />
    </main>
  );
}
