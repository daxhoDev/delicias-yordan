import Image from "next/image";
import brandLogoWhite from "@/public/brand-logo-white.png";

export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-grey-900 flex z-10 flex-col md:flex-row justify-center gap-12 items-center px-16 py-32">
      <p className="text-grey-100 font-bold">
        <span className="text-grey-500">2025</span>DELICIAS YORDAN
      </p>
      <Image
        src={brandLogoWhite}
        alt="Logo Delicias Yordan"
        className="size-16"
      />
      <div className="flex items-center justify-center gap-4">
        <span className="bg-grey-100 size-8"></span>
        <span className="bg-grey-100 size-8"></span>
        <span className="bg-grey-100 size-8"></span>
      </div>
    </footer>
  );
}
