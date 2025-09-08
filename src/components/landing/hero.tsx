import Image from "next/image";
import brandWhite from "@/public/brand-logo-white.png";
import ButtonPrimary from "@/src/components/buttonPrimary";

export default function Hero(): React.ReactNode {
  return (
    <header className="relative flex flex-col items-center px-4 py-8 justify-center min-h-dvh gap-12 bg-[url('@/public/hero-mobile.jpg')] bg-center bg-cover ">
      <div className="absolute bg-primary-900/60 inset-0 z-0"></div>
      <Image
        src={brandWhite}
        width={499}
        height={527}
        alt="Logo de Delicias Yordan"
        className="w-18 z-10"
      />
      <div className="text-center text-primary-100 z-10">
        <h1 className="text-3xl font-bold mb-4">Descubre el verdadero sabor</h1>
        <p className="">
          En Delicias Yordan tenemos las ofertas más deliciosas
        </p>
      </div>
      <ButtonPrimary className="z-10">Contáctanos</ButtonPrimary>
    </header>
  );
}
