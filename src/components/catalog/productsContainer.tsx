import ProductCard from "@/src/components/productCard";
import catalog from "@/src/data/catalog/catalog.json";

export default function ProductsContainer({
  category,
}: {
  category: string;
}): React.ReactNode {
  return (
    <main className="px-4 py-12 pt-24 relative z-10 flex flex-col sm:flex-row flex-wrap gap-12 items-center sm:items-stretch justify-center bg-amber-950 bg-[url('@/public/products-background-mobile.jpg')] md:bg-[url('@/public/products-background.jpg')]">
      <div className="absolute top-0 left-0 size-full bg-amber-950/60 backdrop-blur-sm inset-0 z-0"></div>
      {catalog.map(
        (item) =>
          item.category === category && (
            <ProductCard
              key={item.title}
              title={item.title}
              price={item.price}
              featured={item.featured}
            />
          )
      )}
    </main>
  );
}
