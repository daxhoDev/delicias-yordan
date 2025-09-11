import Features from "@/src/components/landing/features";
import Hero from "@/src/components/landing/hero";
import ProductsSection from "@/src/components/landing/productsSection";

export default function Home(): React.ReactNode {
  return (
    <main>
      <Hero />
      <Features />
      <ProductsSection />
    </main>
  );
}
