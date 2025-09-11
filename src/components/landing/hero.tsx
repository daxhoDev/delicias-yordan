import Image from "next/image";
import brandWhite from "@/public/brand-logo-white.png";
import Button from "@/src/components/button";

export default function Hero(): React.ReactNode {
  return (
    <section className="relative flex flex-col items-center px-4 py-8 justify-center min-h-dvh gap-12 bg-[url('@/public/hero-mobile.jpg')] bg-center bg-cover ">
      <div className="absolute bg-amber-950/50 inset-0 z-0"></div>
      <Image
        src={brandWhite}
        width={499}
        height={527}
        loading="lazy"
        alt="Logo de Delicias Yordan"
        className="w-18 md:w-30 z-10"
      />
      <div className="text-center text-amber-100 z-10">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Descubre el verdadero sabor
        </h1>
        <p className="font-medium md:text-xl">
          En Delicias Yordan tenemos las ofertas más deliciosas
        </p>
      </div>
      <div className="z-10 flex flex-col md:flex-row gap-4 md:gap-12">
        <Button type="primary">Contáctanos</Button>
        <Button type="secondary">Ver Ofertas</Button>
      </div>
    </section>
  );
}
