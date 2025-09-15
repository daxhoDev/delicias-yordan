import ProductsFilter from "@/src/components/catalog/productsFilter";
import ProductsContainer from "@/src/components/catalog/productsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo | Delicias Yordan",
};

export default function Home(): React.ReactNode {
  return (
    <div className="h-full relative bg-amber-950 bg-[url('@/public/products-background-mobile.jpg')] md:bg-[url('@/public/products-background.jpg')]">
      <div className="absolute top-0 left-0 size-full bg-amber-950/60 backdrop-blur-sm inset-0 z-0"></div>
      <ProductsFilter />
      <ProductsContainer category="combos por zelle" />
    </div>
  );
}
