import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/src/globals.css";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  fallback: ["sans-serif"],
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
      <body
        className={`antialiased ${montserrat.className} sm:text-lg bg-amber-50 min-h-dvh grid grid-rows-[repeat(2,auto)] grid-cols-1`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
