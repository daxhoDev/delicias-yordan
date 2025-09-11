import Button from "../button";
import ProductCard from "../productCard";

export default function ProductsSection(): React.ReactNode {
  return (
    <section className="flex flex-col gap-12 items-center text-center py-16 bg-gradient-to-tl bg-amber-200">
      <h2 className="text-amber-800 text-2xl font-bold">Nuestras ofertas</h2>
      <div className="flex flex-col gap-12 items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Button type="secondary">Ver catálogo</Button>
    </section>
  );
}
