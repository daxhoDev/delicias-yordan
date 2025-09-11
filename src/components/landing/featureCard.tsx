import { FeatureCardProps } from "@/src/types/propTypes";
import chicken from "@/public/rice-with-chicken.png";
import Image from "next/image";

export default function FeatureCard({
  align,
}: FeatureCardProps): React.ReactNode {
  return (
    <article
      className={`bg-amber-50 flex flex-row gap-4 items-center justify-evenly py-4 px-4 w-95/100 sm:w-150 sm:rounded-lg sm:text-left shadow-lg ${
        align == "right"
          ? "self-end rounded-l-lg text-right"
          : "self-start rounded-r-lg text-left"
      }`}
    >
      <div className="flex flex-col gap-4 max-w-7/10">
        <h3 className="font-bold text-amber-900">Lorem ipsum</h3>
        <p className="font-medium text-amber-800 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          voluptate tempore maiores.
        </p>
      </div>
      <div className="max-w-3/10">
        <Image
          src={chicken}
          alt="food"
          className={`w-full ${align == "right" ? "-rotate-15" : "rotate-15"}`}
        />
      </div>
    </article>
  );
}
