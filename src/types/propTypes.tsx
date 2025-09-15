import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  type: "primary" | "secondary";
  className?: string;
  target?: string;
}

export interface SliderButtonProps {
  direction: "left" | "right";
  onClick?: MouseEventHandler;
}

// export interface ProductCardProps {
//   title: string;
//   price: string;
//   featured?: boolean;
//   onToggleProduct: React.MouseEventHandler;
// }
