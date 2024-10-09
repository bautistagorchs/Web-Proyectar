import Navbar from "@/componentes/navbar/Navbar";
import { muli } from "@/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/componentes/footer/Footer";

export const metadata: Metadata = {
  title: "Proyectar ONG",
  description: "Organizacion No Gubernamental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://proyectar.org/wp-content/uploads/2024/07/cropped-favicon-32x32.png"
          sizes="any"
        />
      </head>
      <body className={muli.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
