import { MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type: "primary" | "secondary";
  className?: string;
}

export interface FeatureCardProps {
  align: "left" | "right";
}

export interface IconProps {
  size: string;
}

export interface SliderButtonProps {
  direction: "left" | "right";
  onClick?: MouseEventHandler;
}
