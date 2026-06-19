import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShortIn | URL Shortener",
  description: "Create clean short links and track every click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
