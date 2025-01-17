import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center space-y-8 text-center py-20 px-4 text-white"
    >
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
        Meet Our Perfect Poodles
      </h1>
      <p className="max-w-[700px] md:text-xl drop-shadow-md">
        Discover the elegance and intelligence of our beautiful poodle companions.
        Pure breed, loving temperament, and exceptional character.
      </p>
      <div className="space-x-4">
        <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
          Learn More
        </Button>
        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/50">
          Contact Us
        </Button>
      </div>
    </motion.div>
  );
}