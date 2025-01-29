import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playas Canarias - Mapa de Playas con Valoraciones y Servicios",
  description:
    "Descubre todas las playas de Canarias con nuestro mapa interactivo. Consulta valoraciones, accesibilidad y servicios en cada playa.",
  applicationName: "Playas Canarias",
  keywords: [
    "playas Canarias",
    "mapa de playas",
    "playas España",
    "mejores playas Canarias",
    "playas accesibles",
    "turismo en Canarias",
    "valoraciones playas",
    "playas con bandera azul",
    "surf en Canarias",
    "vacaciones en Canarias",
  ],
  authors: [{ name: "Playas Canarias", url: "https://playas.canarycode.es" }],
  openGraph: {
    title: "Playas Canarias - Encuentra Tu Playa Perfecta",
    description:
      "Explora todas las playas de Canarias con nuestro mapa interactivo. Consulta valoraciones, accesibilidad y servicios en cada playa.",
    url: "https://playas.canarycode.es",
    siteName: "Playas Canarias",
    images: [
      {
        url: "https://playas.canarycode.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Playas Canarias - Mapa Interactivo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playas Canarias - Encuentra Tu Playa Perfecta",
    description:
      "Explora todas las playas de Canarias con nuestro mapa interactivo. Consulta valoraciones, accesibilidad y servicios en cada playa.",
    site: "@playascanarias",
    creator: "@playascanarias",
    images: ["https://playas.canarycode.es/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://playas.canarycode.es",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-inter antialiased min-h-dvh md:min-h-screen flex flex-col`}>
        <Header />
          {children}

      </body>
    </html>
  );
}
