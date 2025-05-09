import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Chandra | Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
