import { ButtonProps } from "@/src/types/propTypes";
import React from "react";

export default function Button({
  children,
  className,
  type,
}: ButtonProps): React.ReactNode {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-amber-400 text-amber-950"
          : "bg-amber-700 text-amber-200"
      } px-6 py-2 shadow-sm rounded-full font-bold cursor-pointer hover:scale-95 active:scale-95 transition-all ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}
