import { Element } from "@/src/types/dataTypes";

export default function ProductElement({
  element,
}: {
  element: Element;
}): React.ReactNode {
  return (
    <li>
      {element.name}
      {element.quantity && <span> ({element.quantity}) </span>}
      {element.price && <span className="font-bold"> - {element.price}</span>}
    </li>
  );
}
