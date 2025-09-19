import Image from "next/image";
import brandLogoWhite from "@/public/brand-logo-white.png";

export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-grey-900 text-center flex z-10 flex-col md:flex-row justify-center gap-12 items-center px-16 py-32">
      <p className="text-grey-100 font-bold">
        <span className="text-grey-500">2025</span>DELICIAS YORDAN
      </p>
      <div className="size-16 aspect-square relative flex items-center justify-center">
        <Image
          src={brandLogoWhite}
          width={499}
          height={527}
          alt="Logo Delicias Yordan"
          className="size-16 "
        />
      </div>
      <p className="text-grey-100">
        <span className="text-grey-300">Nos encontramos en</span> CALLE 6 #11 E/
        7 y 9, CIUDAD JARDÍN, HOLGUÍN, CUBA.
      </p>
    </footer>
  );
}
