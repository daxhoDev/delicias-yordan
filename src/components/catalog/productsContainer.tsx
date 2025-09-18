"use client";

import { useState, Dispatch, SetStateAction } from "react";
import ProductCard from "@/src/components/productCard";
import catalog from "@/src/data/catalog/catalog.json";
import ProductDetails from "@/src/components/catalog/productDetails";
import Backdrop from "@/src/components/backdrop";
import { Product } from "@/src/types/dataTypes";

interface Props {
  search: string;
  category: string;
}

export default function ProductsContainer({
  search,
  category,
}: Props): React.ReactNode {
  const [openProduct, setOpenProduct] = useState<Product | null>(null);

  const [showProduct, setShowProduct]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  function handleToggleProduct(product: Product | null): void {
    if (showProduct && openProduct) {
      setOpenProduct(null);
      setTimeout(() => setShowProduct(false), 300);
    } else {
      setShowProduct(true);
      setTimeout(() => setOpenProduct(product), 0);
    }
  }

  return (
    <main className="flex flex-wrap items-stretch justify-center gap-x-16 gap-y-24 max-w-320">
      {catalog
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            (item.category === category || category === "Todo") && (
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
