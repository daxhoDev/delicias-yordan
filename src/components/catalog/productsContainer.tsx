"use client";

import { useState, Dispatch, SetStateAction, useEffect } from "react";
import ProductCard from "@/src/components/productCard";
import catalog from "@/src/data/catalog/catalog.json";
import ProductDetails from "@/src/components/catalog/productDetails";
import Backdrop from "@/src/components/backdrop";
import { Product } from "@/src/types/dataTypes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  search: string;
  category: string;
}

export default function ProductsContainer({
  search,
  category,
}: Props): React.ReactNode {
  const router = useRouter();
  const productId = useSearchParams().get("product");

  const [showProduct, setShowProduct]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  useEffect(() => {
    if (!productId) {
      setTimeout(() => setShowProduct(false), 300);
      return;
    }
    setShowProduct(true);
  }, []);

  function handleToggleProduct(product: Product | null): void {
    if (showProduct) {
      router.push("?", { scroll: false });
      setTimeout(() => setShowProduct(false), 300);
    } else {
      setShowProduct(true);
      setTimeout(
        () => router.push(`?product=${product?._id.$oid}`, { scroll: false }),
        0
      );
    }
  }

  return (
    <main className="flex flex-wrap items-stretch justify-center gap-x-16 gap-y-24 w-95/100 max-w-320">
      {catalog
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            (item.category === category || category === "Todo") && (
              <ProductCard
                key={item._id.$oid}
                product={item}
                onToggleProduct={() => handleToggleProduct(item)}
              />
            )
        )}
      {showProduct && (
        <>
          <Backdrop onClick={() => handleToggleProduct(null)} />
          <ProductDetails onCloseProduct={() => handleToggleProduct(null)} />
        </>
      )}
    </main>
  );
}
