export default function Backdrop({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}): React.ReactNode {
  return (
    <div
      className="fixed z-100 top-0 left-0 backdrop-blur-xs w-dvw h-dvh"
      onClick={onClick}
    ></div>
  );
}
