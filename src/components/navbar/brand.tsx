import Image from "next/image";
import brand from "@/public/brand-logo.png";

export default function Brand(): React.ReactNode {
  return (
    <div className="flex w-10 cursor-pointer items-center gap-4 transition-all">
      <Image src={brand} width={675} height={518} alt="" />
    </div>
  );
}
