import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Spacio Caliraya",
  description: "The best place to stay at Caliraya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Spacio Caliraya</title>
      </head>
      <body className={`${poppins.className} bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
