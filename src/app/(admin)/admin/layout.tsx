// Minimal admin layout: no Header or Footer
import "../../../(site)/globals.css";
import type { ReactNode } from "react";
import Header from "./AdminHeader/Header";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
