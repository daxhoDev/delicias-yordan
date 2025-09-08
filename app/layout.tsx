import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/src/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delicias Yordan | El sabor holguinero",
  description: "Cenas por encargo, dulces y más",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased ${montserrat.className}`}>{children}</body>
    </html>
  );
}
