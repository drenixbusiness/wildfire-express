import type { Metadata } from "next";
import { Anton, Instrument_Serif, Manrope } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wild Fire Express — Dry Van Trucking, Built for the Long Haul",
  description:
    "Wild Fire Express is a dry van OTR carrier hauling freight across the lower 48. Owner operators and company drivers — better miles, honest pay, and dispatch that has your back.",
  icons: {
    icon: "/images/we1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${instrumentSerif.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
