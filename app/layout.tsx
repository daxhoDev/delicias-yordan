import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/src/globals.css";
import Footer from "@/src/components/footer";

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
      <body className={`antialiased ${montserrat.className} sm:text-lg`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
