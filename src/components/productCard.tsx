import Image from "next/image";
import pizza from "@/public/pizza.jpg";
import Button from "./button";
import Whatsapp from "@/src/components/icons/whatsapp";
import { ProductCardProps } from "../types/propTypes";

export default function ProductCard({
  title,
  price,
}: ProductCardProps): React.ReactNode {
  return (
    <article className="hover:-translate-y-2 hover:shadow-xl transition-all flex cursor-pointer flex-col gap-6 relative bg-amber-50 p-3 text-left rounded-xl shadow-lg w-95/100 max-w-90 overflow-hidden">
      <span className="px-4 text-center text-2xl absolute top-0 right-0 bg-amber-50 text-amber-950 py-2 font-bold rounded-bl-lg shadow-md">
        {price}
      </span>
      <Image src={pizza} alt="pizza" className="rounded-lg" />
      <div className="flex flex-col justify-between h-full gap-8 px-4 pb-6">
        <h3 className="text-xl text-center font-medium text-amber-900">
          {title}
        </h3>
        <Button
          type="primary"
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
