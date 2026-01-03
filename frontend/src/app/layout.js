import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster"; // ✅ REQUIRED
import { AuthProvider } from "@/hooks/useAuth";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WorkspaceHub",
  description: "Modern co-working space booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {/*  AUTH PROVIDER MUST WRAP NAVBAR + PAGES */}
        <AuthProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />

          {/* Toasts LAST */}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
