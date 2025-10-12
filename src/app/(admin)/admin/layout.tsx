import "../../../app/globals.css";
import type { ReactNode } from "react";
import Header from "./AdminHeader/Header";
import AdminNavbar from "./AdminNavbar/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}bg-white`}>
        <Header />
        <AdminNavbar />
        {children}
        
        </body>
    </html>
  );
}
