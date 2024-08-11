import Navbar from "@/componentes/navbar/Navbar";
import { poppins } from "@/fuentes/fuentes";
import type { Metadata } from "next";
import "./globals.css";
// import Footer from "@/componentes/footer/Footer";

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
      <body className={poppins.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
