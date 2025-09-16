"use client";

import { Product } from "@/src/types/dataTypes";
import ProductList from "./productList";
import ProductElement from "./productElement";
import Close from "../icons/close";

export default function ProductDetails({
  openProduct,
  onCloseProduct,
}: {
  openProduct: Product | null;
  onCloseProduct: React.MouseEventHandler;
}): React.ReactNode {
  return (
    <>
      <aside
        className={`overflow-scroll text-center text-amber-700 fixed flex flex-col items-center top-0 right-0 w-[100dvw] md:w-[80dvw] lg:w-[60dvw] xl:w-[50dvw] z-100 bg-amber-50/98 shadow-2xl shadow-primary-200 h-dvh py-16 px-8 gap-4 ${
          openProduct
            ? "translate-x-0"
            : "translate-x-[100dvw] md:translate-x-[80dvw] lg:translate-x-[60dvw] xl:translate-x-[50dvw]"
        } transition-all duration-300`}
      >
        <button
          onClick={onCloseProduct}
          className="absolute top-4 left-8 text-xl cursor-pointer"
        >
          <Close />
        </button>
        {openProduct && (
          <>
            <div className="mb-8 border-b border-b-amber-500 pb-4">
              <h2 className="font-bold text-2xl text-amber-900">
                {openProduct.title}
              </h2>
              <span className="text-lg font-bold text-amber-700">
                {openProduct?.price}
              </span>
              {openProduct.description && (
                <p className="italic">"{openProduct.description}"</p>
              )}
            </div>
            {openProduct.lists &&
              openProduct.lists.map((list) => (
                <ProductList key={list.header} list={list} />
              ))}
            {openProduct.extras && (
              <>
                <h3 className="text-lg text-amber-800 font-bold">Agregados:</h3>
                <ul>
                  {openProduct.extras.map((element) => (
                    <ProductElement key={element.name} element={element} />
                  ))}
                </ul>
              </>
            )}
            {openProduct.important && (
              <p className="text-amber-600 mt-16">* {openProduct.important}</p>
            )}
          </>
        )}
      </aside>
    </>
  );
}
