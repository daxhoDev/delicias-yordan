import Image from "next/image";
import pizza from "@/public/pizza.jpg";
import Button from "./button";
import Whatsapp from "@/src/components/icons/whatsapp";
import { Product } from "../types/dataTypes";

export default function ProductCard({
  product,
  onToggleProduct,
}: {
  product: Product;
  onToggleProduct?: React.MouseEventHandler;
}): React.ReactNode {
  return (
    <article
      onClick={onToggleProduct}
      className="hover:-translate-y-2 hover:shadow-xl transition-all flex cursor-pointer flex-col gap-6 relative bg-amber-50 p-3 text-left rounded-xl shadow-lg w-95/100 max-w-90 overflow-hidden"
    >
      <span className="px-4 text-center text-xl sm:text-2xl absolute top-0 right-0 bg-amber-50 text-amber-950 py-2 font-bold rounded-bl-lg shadow-md">
        {product.price}
      </span>
      {product.featured && (
        <span className="absolute p-2 bg-white shadow-md w-80 -rotate-45 top-4 -left-30 sm:top-5 sm:-left-28 z-10 text-xl sm:text-2xl text-amber-700 font-bold flex items-center justify-center">
          OFERTA
        </span>
      )}
      <Image src={pizza} alt="pizza" className="rounded-lg" />
      <div className="flex flex-col justify-between h-full gap-8 px-4 pb-6">
        <h3 className="text-lg sm:text-xl text-center font-medium text-amber-900">
          {product.title}
        </h3>
        <Button
          variant="primary"
          href="https://wa.me/qr/AB2GJHKE3LR5L1"
          target="_blank"
        >
          <Whatsapp size={"1.5rem"} />
          Contáctanos
        </Button>
      </div>
    </article>
  );
}
