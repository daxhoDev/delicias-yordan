"use client";

import { useState } from "react";
import ProductsFilter from "@/src/components/catalog/productsFilter";
import ProductsContainer from "@/src/components/catalog/productsContainer";

export default function CatalogWrapper(): React.ReactNode {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("Todo");

  return (
    <>
      <ProductsFilter
        category={category}
        setCategory={setCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductsContainer category={category} search={searchQuery} />
    </>
  );
}
