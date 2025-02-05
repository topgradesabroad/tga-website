import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from '@/components/TestimonialSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <TestimonialSection />
    </main>
  );
}