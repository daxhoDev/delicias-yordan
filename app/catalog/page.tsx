import Categories from "@/src/components/catalog/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo | Delicias Yordan",
};

export default function Home(): React.ReactNode {
  return <Categories />;
}
