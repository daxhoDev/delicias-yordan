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
  metadataBase: new URL("https://deliciasyordan.com"),
  title: "Delicias Yordan | Comida en Holguín",
  description:
    "Arroz imperial, entrantes, cenas de cerdo asado, buffets de cumpleaños y más",
  keywords: [
    "comida Holguín",
    "arroz imperial",
    "catering",
    "cerdo asado",
    "comida",
    "comida por encargo",
    "cakes",
    "pizzas",
    "arroz",
    "carne",
    "cena",
    "Holguín",
    "Cuba",
    "cumpleaños",
    "buffet",
    "combo",
  ],
  openGraph: {
    title: "Delicias Yordan | Comida en Holguín",
    siteName: "Delicias Yordan",
    type: "website",
    url: "https://deliciasyordan.com",
    description:
      "Arroz imperial, entrantes, cenas de cerdo asado, buffets de cumpleaños y más",
    images: [
      {
        url: "/preview.png",
        width: 1920,
        height: 1080,
        alt: "Delicias Yordan",
      },
    ],
  },
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
