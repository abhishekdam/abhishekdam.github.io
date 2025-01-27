import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Abhishek Dam",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me-1.png" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "antialiased bg-gray-900 text-yellow-100 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
