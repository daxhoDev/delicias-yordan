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
