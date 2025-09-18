"use client";

import Image from "next/image";
import logo from "@/public/brand-logo.png";
import Button from "./button";
import Whatsapp from "@/src/components/icons/whatsapp";
import { Product } from "../types/dataTypes";
import { useState } from "react";
import Spinner from "./icons/spinner";

export default function ProductCard({
  product,
  onToggleProduct,
}: {
  product: Product;
  onToggleProduct?: React.MouseEventHandler;
}): React.ReactNode {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <article
      onClick={onToggleProduct}
      className="hover:-translate-y-2 hover:shadow-xl transition-all flex cursor-pointer flex-col gap-6 relative bg-amber-50 p-3 text-left rounded-xl shadow-lg w-95/100 max-w-90 overflow-hidden"
    >
      <span className="z-10 px-4 text-center text-xl sm:text-2xl absolute top-0 right-0 bg-amber-50 text-amber-950 py-2 font-bold rounded-bl-lg shadow-md">
        {product.price}
      </span>
      {product.featured && (
        <span className="absolute p-2 bg-amber-300 shadow-lg w-80 -rotate-45 top-4 -left-30 sm:top-5 sm:-left-28 z-10 text-xl sm:text-2xl text-amber-800 font-bold flex items-center justify-center">
          OFERTA
        </span>
      )}
      <div className="relative text-amber-800 w-full aspect-square flex items-center justify-center">
        {isLoading && <Spinner width={64} height={64} />}
        <Image
          src={product.image || logo}
          fill
          loading="lazy"
          alt={product.title}
          onLoadingComplete={() => setIsLoading(false)}
          className={`${
            !product.image ? "p-24 drop-shadow-xl drop-shadow-amber-300" : ""
          } ${
            isLoading ? "opacity-0" : ""
          } transition-all rounded-lg w-full object-center object-cover`}
        />
      </div>
      <div className="flex flex-col justify-between h-full gap-8 px-4 pb-6">
        <h3 className="text-lg sm:text-xl text-center font-medium text-amber-900">
          {product.title}
        </h3>
        <Button
          variant="primary"
          href="https://wa.me/qr/AB2GJHKE3LR5L1"
          target="_blank"
        >
          <Whatsapp width={24} height={24} />
          Contáctanos
        </Button>
      </div>
    </article>
  );
}
