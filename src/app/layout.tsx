import type { Metadata } from "next";
import { roboto } from "@/fuentes/fuentes";
import "./globals.css";
import Navbar from "@/componentes/navbar/Navbar";
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
      <body className={roboto.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
