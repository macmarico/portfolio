import type { Metadata } from "next";
import "./globals.css";
import "../../public/css/clouds.css";

export const metadata: Metadata = {
  title: "ibitcode | Software Solutions",
  description: "Professional Software Development Services",
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
