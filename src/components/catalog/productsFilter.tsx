import categories from "@/src/data/catalog/categories.json";
import { Dispatch, SetStateAction } from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

export default function ProductsFilters({
  setSearchQuery,
  searchQuery,
  category,
  setCategory,
}: Props): React.ReactNode {
  return (
    <form className="w-8/10 max-w-160 relative grid grid-rows-2 grid-cols-2 gap-4 text-amber-950">
      <input
        value={searchQuery}
        type="text"
        placeholder="Realiza una búsqueda..."
        className="col-start-1 col-end-3 row-start-1 row-end-2  rounded-lg bg-amber-50 w-full px-4 py-2 shadow-md focus:outline-none focus:-translate-y-2 focus:shadow-lg shadow-amber-500 transition-all"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-amber-50 px-4 py-2 rounded-lg col-start-1 col-end-3 sm:col-end-2 row-start-2 row-end-3 shadow-md focus:outline-none focus:shadow-lg shadow-amber-500 transition-all cursor-pointer"
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </form>
  );
}
