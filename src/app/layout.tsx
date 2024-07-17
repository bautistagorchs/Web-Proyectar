import type { Metadata } from "next";
import { open_sans } from "@/fuentes/fuentes";
import "./globals.css";

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
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
