"use client";

export default function ProductDetails({
  isProductOpen,
}: {
  isProductOpen: boolean;
}): React.ReactNode {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 w-[50dvw] z-200 bg-amber-50/80 shadow-2xl shadow-primary-200 h-dvh flex flex-col text-center py-8 px-16 gap-4 ${
          isProductOpen ? "translate-x-0" : "translate-x-75"
        } transition-all duration-200`}
      >
        GaY
      </aside>
    </>
  );
}
