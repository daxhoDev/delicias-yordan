import { MouseEventHandler } from "react";
import Menu from "@/src/components/icons/menu";

export default function ButtonToggle({
  onToggleMobileNav,
}: {
  onToggleMobileNav: MouseEventHandler;
}): React.ReactNode {
  return (
    <button className="cursor-pointer lg:hidden" onClick={onToggleMobileNav}>
      <Menu height={32} width={32} />
    </button>
  );
}
