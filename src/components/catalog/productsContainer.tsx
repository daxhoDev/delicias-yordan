"use client";

import { useState, Dispatch, SetStateAction } from "react";
import ProductCard from "@/src/components/productCard";
import catalog from "@/src/data/catalog/catalog.json";
import ProductDetails from "@/src/components/catalog/productDetails";
import Backdrop from "@/src/components/backdrop";
import { Product } from "@/src/types/dataTypes";

export default function ProductsContainer({
  category,
}: {
  category: string;
}): React.ReactNode {
  const [openProduct, setOpenProduct] = useState<Product | null>(null);

  const [showProduct, setShowProduct]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  function handleToggleProduct(product: Product | null): void {
    if (showProduct && openProduct) {
      setOpenProduct(null);
      setTimeout(() => setShowProduct(false), 200);
    } else {
      setShowProduct(true);
      setTimeout(() => setOpenProduct(product), 0);
    }
  }

  return (
    <main className="h-full px-4 py-12 pt-24 relative flex flex-col sm:flex-row flex-wrap gap-12 items-center sm:items-stretch justify-center bg-amber-950 bg-[url('@/public/products-background-mobile.jpg')] md:bg-[url('@/public/products-background.jpg')]">
      <div className="absolute top-0 left-0 size-full bg-amber-950/60 backdrop-blur-sm inset-0 z-0"></div>
      {catalog.map(
        (item) =>
          item.category === category && (
            <ProductCard
              key={item.title}
              product={item}
              onToggleProduct={() => handleToggleProduct(item)}
            />
          )
      )}
      {showProduct && (
        <>
          <Backdrop onClick={() => handleToggleProduct(openProduct)} />
          <ProductDetails
            openProduct={openProduct}
            onCloseProduct={() => handleToggleProduct(null)}
          />
        </>
      )}
    </main>
  );
}
