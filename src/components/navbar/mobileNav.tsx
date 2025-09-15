"use client";

import Button from "@/src/components/button";
import WhatsappIcon from "../icons/whatsapp";

interface Props {
  isMobileNavOpen: boolean;
  onToggleMobileNav: React.MouseEventHandler;
}

export default function MobileNav({
  isMobileNavOpen,
  onToggleMobileNav,
}: Props): React.ReactNode {
  return (
    <>
      <nav
        className={`fixed top-0 right-0 z-150 w-75 bg-amber-50/80 shadow-2xl shadow-primary-200 h-dvh flex flex-col text-center py-8 px-16 gap-4 ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-75"
        } transition-all duration-200`}
      >
        <Button
          variant="primary"
          href="https://wa.me/qr/AB2GJHKE3LR5L1"
          target="_blank"
        >
          <WhatsappIcon size={"1.5rem"} /> Contáctanos
        </Button>
        <Button variant="secondary" href="/catalog" onClick={onToggleMobileNav}>
          Ver catálogo
        </Button>
      </nav>
    </>
  );
}
