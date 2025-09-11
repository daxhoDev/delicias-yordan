import Image from "next/image";
import pizza from "@/public/pizza.jpg";
import Button from "./button";
import Whatsapp from "@/src/icons/whatsapp";

export default function ProductCard(): React.ReactNode {
  return (
    <article className="flex flex-col gap-6 relative bg-amber-50 p-3 text-left rounded-xl shadow-lg w-95/100 max-w-90 overflow-hidden">
      <span className="w-4/10 text-center text-2xl absolute top-0 right-0 bg-amber-50 text-amber-950 p-2 font-bold rounded-bl-lg shadow-md">
        $350.00
      </span>
      <Image src={pizza} alt="pizza" className="rounded-lg" />
      <div className="flex flex-col gap-4 px-4 pb-6">
        <h3 className="text-xl font-bold text-amber-900">Pizza Napolitana</h3>
        <p className="text-amber-900">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nemo sit
          nostrum officiis esse cum placeat necessitatibus.
        </p>
        <Button type="primary">
          <Whatsapp size={"1.5rem"} />
          Contáctanos
        </Button>
      </div>
    </article>
  );
}
