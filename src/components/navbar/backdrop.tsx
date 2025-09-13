import { MouseEventHandler } from "react";

export default function Backdrop({
  onToggleMobileNav,
}: {
  onToggleMobileNav: MouseEventHandler;
}): React.ReactNode {
  return (
    <div
      className="fixed top-0 left-0 backdrop-blur-xs w-dvw h-dvh"
      onClick={onToggleMobileNav}
    ></div>
  );
}
