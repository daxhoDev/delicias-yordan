import FeaturesSection from "@/src/components/landing/featuresSection";
import Hero from "@/src/components/landing/hero";
import ProductsSection from "@/src/components/landing/productsSection";
import TestimonialsSection from "@/src/components/landing/testimonialsSection";

export default function Home(): React.ReactNode {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
    </main>
  );
}
