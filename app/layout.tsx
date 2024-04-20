import {
  Footer,
  FooterCopyright,
  FooterIcon,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  ThemeModeScript,
} from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BsYoutube } from "react-icons/bs";

import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jardines Mexicanos",
  description: "Plantas nativas Mexicanas para promover la flora y fauna local, cuidando el medio ambiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Navbar className="p-4 bg-transparent dark:bg-transparent border-b">
          <NavbarBrand href="/">
            <span className="self-center text-xl">Jardines Mexicanos</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <Link href="/como-empezar">Como empezar</Link>
          </NavbarCollapse>
        </Navbar>
        {children}
        <Footer className="flex p-4 sm:px-6 rounded-none dark:bg-gray-900">
          <FooterCopyright href="#" by="Jardines Mexicanos" year={2024} />
          <div className="ms-auto">
            <FooterIcon href="https://www.youtube.com/@jardinesmexicanos" icon={BsYoutube} />
          </div>
        </Footer>
      </body>
    </html>
  );
}
