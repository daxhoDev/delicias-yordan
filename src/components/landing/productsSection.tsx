import Button from "../button";
import ProductCard from "@/src/components/productCard";
import catalog from "@/src/data/catalog/catalog.json";

export default function ProductsSection(): React.ReactNode {
  return (
    <section className="px-4 relative flex flex-col gap-12 items-center py-16 bg-amber-900 bg-[url('@/public/products-background-mobile.jpg')] md:bg-[url('@/public/products-background.jpg')] bg-cover bg-center">
      <div className="absolute top-0 left-0 size-full bg-amber-950/50 backdrop-blur-sm inset-0 z-0"></div>
      <h2 className="text-amber-200 z-10 text-center text-2xl font-bold">
        Nuestras ofertas destacadas
      </h2>
      <div className="z-10 flex flex-col sm:flex-row flex-wrap gap-12 items-center sm:items-stretch justify-center">
        {catalog.map(
          (item) =>
            item.featured && <ProductCard key={item.title} product={item} />
        )}
      </div>
      <Button className="z-10" variant="secondary" href="/catalog">
        Ver catálogo
      </Button>
    </section>
  );
}
