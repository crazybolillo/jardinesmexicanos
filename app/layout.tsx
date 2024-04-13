import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ThemeModeScript,
  Footer,
  FooterCopyright,
  FooterIcon,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";

import "./globals.css";
import { BsGithub } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jardines Mexicanos",
  description:
    "Plantas nativas Mexicanas para promover la flora y fauna local, cuidando el medio ambiente.",
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
        </Navbar>
        <div className="h-full mx-auto">{children}</div>
        <Footer className="flex p-4 sm:px-6 rounded-none dark:bg-gray-900">
          <FooterCopyright href="#" by="Jardines Mexicanos" year={2024} />
        </Footer>
      </body>
    </html>
  );
}
