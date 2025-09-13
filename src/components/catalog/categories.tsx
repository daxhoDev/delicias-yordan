import categories from "@/src/data/catalog/categories.json";
import CategorieButton from "./categorieButton";

export default function Categories(): React.ReactNode {
  return (
    <header className="flex items-center gap-x-8 overflow-x-scroll">
      {categories.map((categorie) => (
        <CategorieButton key={categorie}>{categorie}</CategorieButton>
      ))}
    </header>
  );
}
