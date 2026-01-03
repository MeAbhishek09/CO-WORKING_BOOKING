"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Availability", href: "/availability" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
<<<<<<< Updated upstream
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-gray-900">
            CoWork<span className="text-blue-600">Hub</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2 text-sm font-medium">

          {/* Pricing + Contact (PUBLIC + USER + ADMIN + OWNER) */}
          {(!user ||
            user.role === "USER" ||
            user.role === "ADMIN" ||
            user.role === "OWNER") && (
            <>
              <NavLink href="/pricing" pathname={pathname}>
                Pricing
              </NavLink>
              <NavLink href="/contact" pathname={pathname}>
                Contact
              </NavLink>
            </>
          )}

          {/* Availability (PUBLIC + USER) */}
          {(!user || user.role === "USER") && (
            <NavLink href="/availability" pathname={pathname}>
              Availability
            </NavLink>
          )}

          {/* Not Logged In */}
          {!user && (
            <Link
              href="/login"
              className={`ml-2 px-4 py-2 rounded-lg border transition ${
                pathname === "/login"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-blue-200 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Log in
=======
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav className="glass rounded-2xl px-6 py-4 shadow-medium backdrop-blur">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Workspace<span className="text-primary">Hub</span>
              </span>
>>>>>>> Stashed changes
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");

<<<<<<< Updated upstream
          {/* ADMIN */}
          {user?.role === "ADMIN" && (
            <>
              <NavLink href="/admin/reception" pathname={pathname}>
                Occupancy
              </NavLink>
              <NavLink
                href="/admin/reception/bookings"
                pathname={pathname}
              >
                Bookings
              </NavLink>
              <NavLink
                href="/admin/reception/users"
                pathname={pathname}
              >
                Users
              </NavLink>
              <Logout onClick={logout} />
            </>
          )}
=======
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-border"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/");
>>>>>>> Stashed changes

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}

                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                    <Button variant="outline" asChild>
                      <Link href="/login">Log in</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
<<<<<<< Updated upstream
    </nav>
  );
}

/* ---------- UI Helpers (same logic) ---------- */

function NavLink({ href, pathname, children }) {
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "text-blue-600 bg-blue-50"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
}

function NavButton({ href, pathname, children }) {
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`ml-1 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }`}
    >
      {children}
    </Link>
  );
}

function Logout({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="ml-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-300"
    >
      Logout
    </button>
=======
    </header>
>>>>>>> Stashed changes
  );
}
