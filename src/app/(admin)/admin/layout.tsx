import "../../../app/globals.css";
import type { ReactNode } from "react";
import Header from "./AdminHeader/Header";
import AdminNavbar from "./AdminNavbar/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>
        <Header />
        <AdminNavbar />
        {children}
        
        </body>
    </html>
  );
}
