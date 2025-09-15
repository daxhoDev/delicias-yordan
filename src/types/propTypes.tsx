import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: React.MouseEventHandler;
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
