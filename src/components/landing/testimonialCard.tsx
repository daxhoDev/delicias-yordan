import Image from "next/image";
import customer from "@/public/customer.jpg";

interface Props {
  name: string;
  children: string;
}

export default function TestimonialCard({
  name,
  children,
}: Props): React.ReactNode {
  return (
    <article className="keen-slider__slide rounded-lg bg-amber-50 flex flex-col items-center justify-center gap-6 p-8 my-4 shadow-lg">
      <p className="text-center text-amber-800 italic font-medium">
        "{children}"
      </p>
      <div className="flex gap-4 items-center justify-center">
        {/* <Image
          className="h-12 w-12 object-center object-cover overflow-hidden rounded-full"
          src={customer}
          alt="cliente"
        /> */}
        <h3 className="font-bold text-amber-900">- {name}</h3>
      </div>
    </article>
  );
}
