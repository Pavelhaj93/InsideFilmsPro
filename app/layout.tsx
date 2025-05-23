import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas-neue",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--oswald",
});

export const metadata: Metadata = {
  icons: {
    icon: "/pictogram/INSIDEPRO15.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className} ${oswald.variable}`}>
        <Navbar />
        {children}
        <footer className="w-full bg-black text-white py-4 text-center">
          <p className="text-lg tracking-wider">
            &copy; {new Date().getFullYear()} R&T Production s.r.o. - All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
