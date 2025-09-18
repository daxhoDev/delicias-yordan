import { Metadata } from "next";
import CatalogWrapper from "@/src/components/catalog/CatalogWrapper";

export const metadata: Metadata = {
  title: "Catálogo | Delicias Yordan",
};

export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-col gap-16 items-center px-4 pt-32 pb-24 relative bg-[url('@/public/products-background-mobile.jpg')] md:bg-[url('@/public/products-background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="fixed top-0 left-0 size-full bg-gradient-to-tl from-50% from-amber-950/70 to-amber-600/70 backdrop-blur-sm inset-0"></div>
      <CatalogWrapper />
    </div>
  );
}
