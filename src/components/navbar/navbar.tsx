"use client";

import Brand from "@/src/components/navbar/brand";
import MobileNav from "@/src/components/navbar/mobileNav";
import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import Backdrop from "../backdrop";
import ButtonToggle from "./buttonToggle";
import Button from "../button";
import WhatsappIcon from "../icons/whatsapp";
import Link from "next/link";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  const [showMobileNav, setShowMobileNav]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  const pathname = usePathname();

  function handleToggleMobileNav(): void {
    if (showMobileNav && isMobileNavOpen) {
      setIsMobileNavOpen(false);
      setTimeout(() => setShowMobileNav(false), 200);
    } else {
      setShowMobileNav(true);
      setTimeout(() => setIsMobileNavOpen(true), 0);
    }
  }

  return (
    <header className="fixed top-0 z-50 flex w-dvw items-center justify-between bg-amber-50/40 px-10 py-2 whitespace-nowrap backdrop-blur-sm transition-all">
      <Link href={"/"}>
        <Brand />
      </Link>
      <div
        className={`items-center gap-4 ${
          pathname === "/catalog" ? "hidden" : "flex"
        }`}
      >
        <ButtonToggle onToggleMobileNav={handleToggleMobileNav} />
      </div>
      <div
        className={`items-center gap-4 hidden ${
          pathname === "/catalog" ? "hidden" : "lg:flex"
        }`}
      >
        <Button
          variant="primary"
          href="https://wa.me/qr/AB2GJHKE3LR5L1"
          target="_blank"
        >
          <WhatsappIcon width={24} height={24} /> Contáctanos
        </Button>
        <Button variant="secondary" href="/catalog">
          Ver catálogo
        </Button>
      </div>
      {showMobileNav && (
        <>
          <Backdrop onClick={handleToggleMobileNav} />
          <MobileNav
            isMobileNavOpen={isMobileNavOpen}
            onToggleMobileNav={handleToggleMobileNav}
          />
        </>
      )}
    </header>
  );
}
