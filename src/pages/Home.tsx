import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PoodlesSection } from '@/components/PoodlesSection';

export function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PoodlesSection />
      </main>
    </div>
  );
}