import ProductsFilter from "@/src/components/catalog/productsFilter";
import ProductsContainer from "@/src/components/catalog/productsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo | Delicias Yordan",
};

export default function Home(): React.ReactNode {
  return (
    <div>
      <ProductsFilter />
      <ProductsContainer category="entrantes" />
    </div>
  );
}
