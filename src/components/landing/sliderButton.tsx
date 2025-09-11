import ArrowLeft from "@/src/icons/arrowLeft";
import ArrowRight from "@/src/icons/arrowRight";
import { SliderButtonProps } from "@/src/types/propTypes";

export default function SliderButton({
  direction,
  onClick,
}: SliderButtonProps): React.ReactNode {
  return (
    <button
      className="bg-amber-800 text-amber-200 rounded-full cursor-pointer p-2 shadow-lg hover:scale-95 active:scale-95"
      onClick={onClick}
    >
      {direction === "left" && <ArrowLeft className="size-6" />}
      {direction === "right" && <ArrowRight className="size-6" />}
    </button>
  );
}
