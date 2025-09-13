export default function CategorieButton({
  children,
}: {
  children: string;
}): React.ReactNode {
  return (
    <button className="p-4 text-amber-900 transition-all font-bold border-b-4 border-b-transparent hover:border-b-amber-900 cursor-pointer">
      {children}
    </button>
  );
}
