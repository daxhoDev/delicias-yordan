import { FeatureCardProps } from "@/src/types/propTypes";
import chicken from "@/public/rice-with-chicken.png";
import Image from "next/image";

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps): React.ReactNode {
  return (
    <article className="odd:self-start odd:rounded-r-lg odd:text-left even:self-end even:rounded-l-lg even:text-right bg-amber-50 flex flex-row gap-4 items-center justify-evenly py-4 sm:p-8 px-4 w-95/100 sm:w-150 sm:rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
      <div className="flex flex-col gap-4 max-w-7/10">
        <h3 className="font-bold text-amber-900">{title}</h3>
        <p className="text-amber-800">{description}</p>
      </div>
      <div className="max-w-3/10">
        <Image src={chicken} alt="food" className="w-full" />
      </div>
    </article>
  );
}
