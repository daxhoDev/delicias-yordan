"use client";

import Button from "../button";
import ProductCard from "@/src/components/productCard";
import catalog from "@/src/data/catalog/catalog.json";
import slugify from "@/src/helpers/slugify";
import { Product } from "@/src/types/dataTypes";
import { useRouter } from "next/navigation";

export default function ProductsSection(): React.ReactNode {
  const router = useRouter();

  function handleToggleProduct(product: Product) {
    router.push(`catalog?product=${slugify(product.title)}`);
  }

  return (
    <section className="px-4 relative flex flex-col gap-24 items-center py-32 bg-amber-900 bg-[url('@/public/products-background-mobile.jpg')] md:bg-[url('@/public/products-background.jpg')] bg-no-repeat bg-fixed bg-cover bg-center">
      <div className="absolute top-0 left-0 size-full bg-amber-950/65 backdrop-blur-sm inset-0 z-0"></div>
      <h2 className="text-amber-200 z-10 text-center text-2xl sm:text-3xl font-bold">
        Nuestras ofertas destacadas
      </h2>
      <div className="z-10 flex flex-row flex-wrap gap-y-24 gap-x-16 items-stretch justify-center w-95/100 max-w-320">
        {catalog
          .sort((a, b) => a.title.localeCompare(b.title))
          .map(
            (item) =>
              item.featured && (
                <ProductCard
                  key={item.title}
                  product={item}
                  onToggleProduct={() => handleToggleProduct(item)}
                />
              )
          )}
      </div>
      <Button className="z-10" variant="secondary" href="/catalog">
        Ver catálogo
      </Button>
    </section>
  );
}
