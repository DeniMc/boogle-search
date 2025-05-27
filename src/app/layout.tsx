import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Dougal - An Innocent Search Engine",
  description: "An alternative to Google",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
