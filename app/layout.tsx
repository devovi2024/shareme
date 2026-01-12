import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShareMe",
  description:
    "ShareMe is a platform for building and sharing your own projects with the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        appearance={{

          variables: { colorPrimary: "#6366f1" },
          elements: {
            banner: "hidden" 
          }
        }}
      >

      <html lang="en">
        <body className={`${inter.className} antialiased bg-gray-50`}>
          <Header />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
