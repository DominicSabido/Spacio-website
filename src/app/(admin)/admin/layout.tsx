import "../../../app/globals.css";
import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/Sidebar/adminSidebar"
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
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
        
        </body>
    </html>
  );
}
