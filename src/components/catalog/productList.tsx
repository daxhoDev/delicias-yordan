import { List } from "@/src/types/dataTypes";
import ProductElement from "@/src/components/catalog/productElement";

export default function ProductList({ list }: { list: List }): React.ReactNode {
  return (
    <div className="mb-4">
      <h3 className="text-lg text-amber-800 font-bold">{list.header}</h3>
      <ul>
        {list.elements.map((element) => (
          <ProductElement key={element.name} element={element} />
        ))}
      </ul>
    </div>
  );
}
