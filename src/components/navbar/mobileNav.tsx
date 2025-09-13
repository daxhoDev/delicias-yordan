"use client";

import Button from "@/src/components/button";
import WhatsappIcon from "../icons/whatsapp";

export default function MobileNav({
  isMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
}): React.ReactNode {
  return (
    <>
      <nav
        className={`fixed top-0 right-0 w-75 bg-amber-50/95 shadow-2xl shadow-primary-200 h-dvh flex flex-col text-center py-8 px-16 gap-4 ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-75"
        } transition-all duration-200`}
      >
        <Button type="primary" href="/catalog">
          <WhatsappIcon size="1.5rem" /> Contáctanos
        </Button>
        <Button type="secondary" href="/catalog">
          Ver catálogo
        </Button>
      </nav>
    </>
  );
}
