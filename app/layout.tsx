import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sHareMe",
  description:
    "sHareMe is a platform for building and sharing your own projects with the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>sHareMe</header>
        <main>{children}</main>
        <footer>© sHareMe Inc.</footer>
      </body>
    </html>
  );
}
