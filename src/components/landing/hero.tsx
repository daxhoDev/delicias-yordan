import Image from "next/image";
import brandWhite from "@/public/brand-logo-white.png";
import Button from "@/src/components/button";
import WhatsappIcon from "@/src/components/icons/whatsapp";

export default function Hero(): React.ReactNode {
  return (
    <section className="relative flex flex-col items-center px-4 py-8 justify-center min-h-dvh gap-12 bg-[url('@/public/hero-mobile.jpg')] md:bg-[url('@/public/hero-desktop.jpg')] bg-no-repeat bg-fixed bg-center bg-cover ">
      <div className="absolute bg-amber-950/65 inset-0 z-0"></div>
      <Image
        src={brandWhite}
        width={499}
        height={527}
        loading="eager"
        placeholder="blur"
        alt="Logo de Delicias Yordan"
        className="w-18 md:w-30 z-10"
      />
      <div className="text-center text-amber-50 z-10">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Descubre el verdadero sabor
        </h1>
        <p className="font-medium md:text-xl">
          En Delicias Yordan tenemos las ofertas más deliciosas
        </p>
      </div>
      <div className="z-10 flex flex-col md:flex-row gap-4 md:gap-12">
        <Button
          variant="primary"
          href="https://wa.me/qr/AB2GJHKE3LR5L1"
          target="_blank"
        >
          <WhatsappIcon width={24} height={24} /> Contáctanos
        </Button>
        <Button variant="secondary" href="/catalog">
          Ver Ofertas
        </Button>
      </div>
    </section>
  );
}
