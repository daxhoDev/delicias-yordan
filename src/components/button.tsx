import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: React.MouseEventHandler;
  className?: string;
  target?: string;
}

export default function Button({
  children,
  className,
  variant,
  href,
  target,
  onClick,
}: Props): React.ReactNode {
  return (
    <Link
      onClick={onClick}
      href={href}
      target={target}
      className={`${
        variant === "primary"
          ? "bg-amber-400 text-amber-950"
          : "bg-amber-700 text-amber-200"
      } flex gap-2 justify-center items-center px-6 py-2 shadow-sm rounded-full font-bold cursor-pointer hover:scale-95 active:scale-95 transition-all ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
}
