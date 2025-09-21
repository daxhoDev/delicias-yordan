import Image from "next/image";
import Link from "next/link";
import brandLogoWhite from "@/public/brand-logo-white.png";
import Facebook from "@/src/components/icons/facebook";

export default function Footer(): React.ReactNode {
  return (
    <footer className="flex flex-col items-center bg-grey-900 text-grey-100 text-center z-10 px-16 py-32">
      <div className="w-full max-w-200 flex flex-col md:flex-row justify-center gap-12 mb-12 items-center">
        <p className="font-bold flex-1">
          <span className="text-grey-500">2025</span>DELICIAS YORDAN
        </p>
        <div className="size-16 aspect-square relative flex items-center justify-center flex-1">
          <Image
            src={brandLogoWhite}
            width={499}
            height={527}
            alt="Logo Delicias Yordan"
            className="size-16 "
          />
        </div>
        <Link
          className="flex-1 flex items-center justify-center"
          href="https://www.facebook.com/ania.garces.hidalgo"
        >
          <Facebook
            width={32}
            height={32}
            className="hover:text-grey-500 transition-all cursor-pointer"
          />
        </Link>
      </div>
      <p>
        <span className="text-grey-500">Nos encontramos en</span>
        <span className="font-bold">
          {" "}
          CALLE 6 #11 E/ 7 y 9, CIUDAD JARDÍN, HOLGUÍN, CUBA.
        </span>
      </p>
    </footer>
  );
}
