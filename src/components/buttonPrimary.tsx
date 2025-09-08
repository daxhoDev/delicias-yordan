import { ButtonProps } from "@/src/types/propTypes";
import React from "react";

export default function ButtonPrimary({
  children,
  className,
}: ButtonProps): React.ReactNode {
  return (
    <button
      className={`bg-primary-500 px-6 py-2 rounded-full font-bold text-primary-900 cursor-pointer hover:scale-95 transition-all ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}
