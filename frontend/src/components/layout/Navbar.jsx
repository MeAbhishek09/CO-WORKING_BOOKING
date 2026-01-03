"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  // const isActive = (href) =>
  //   pathname === href || pathname.startsWith(href + "/");
  const isActive = (href) => pathname === href;

  return (
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
            </Link>

            {/* ================= Desktop Navigation ================= */}
            <div className="hidden md:flex items-center gap-1">

              <NavLink href="/" active={isActive("/")}>
                Home
              </NavLink>

              {/* Pricing (ALL) */}
              <NavLink href="/pricing" active={isActive("/pricing")}>
                Pricing
              </NavLink>

              {/* Availability (PUBLIC + USER) */}
              {(!user || user.role === "USER") && (
                <NavLink href="/availability" active={isActive("/availability")}>
                  Availability
                </NavLink>
              )}

              {/* Contact (ALL) */}
              <NavLink href="/contact" active={isActive("/contact")}>
                Contact
              </NavLink>

              {/* USER */}
              {user?.role === "USER" && (
                <NavLink
                  href="/user/dashboard"
                  active={isActive("/user/dashboard")}
                >
                  Dashboard
                </NavLink>
              )}

              {/* ADMIN */}
              {user?.role === "ADMIN" && (
                <>
                  <NavLink
                    href="/admin/reception"
                    active={isActive("/admin/reception")}
                  >
                    Occupancy
                  </NavLink>
                  <NavLink
                    href="/admin/reception/bookings"
                    active={isActive("/admin/reception/bookings")}
                  >
                    Bookings
                  </NavLink>
                  <NavLink
                    href="/admin/reception/users"
                    active={isActive("/admin/reception/users")}
                  >
                    Users
                  </NavLink>
                </>
              )}

              {/* OWNER */}
              {user?.role === "OWNER" && (
                <NavLink
                  href="/owner/analytics"
                  active={isActive("/owner/analytics")}
                >
                  Analytics
                </NavLink>
              )}
            </div>

            {/* ================= Desktop CTA ================= */}
            <div className="hidden md:flex items-center gap-3">

              

              {/* Login / Logout */}
              {!user ? (
                <Button variant="ghost" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
              ) : (
                <Button variant="ghost" onClick={logout}>
                  Logout
                </Button>
              )}
              
              {/* Book Now (PUBLIC + USER) */}

              {(!user || user.role === "USER") && (
                <Button asChild>
                  <Link href="/book">Book Now</Link>
                </Button>
              )}
            </div>

            {/* Mobile Toggle */}
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

          {/* ================= Mobile Menu ================= */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-border"
              >
                <div className="flex flex-col gap-2">

                  <MobileLink
                    href="/"
                    active={isActive("/")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </MobileLink>

                  <MobileLink
                    href="/pricing"
                    active={isActive("/pricing")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </MobileLink>

                  {(!user || user.role === "USER") && (
                    <MobileLink
                      href="/availability"
                      active={isActive("/availability")}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Availability
                    </MobileLink>
                  )}

                  <MobileLink
                    href="/contact"
                    active={isActive("/contact")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </MobileLink>

                  {/* USER */}
                  {user?.role === "USER" && (
                    <MobileLink
                      href="/user/dashboard"
                      active={isActive("/user/dashboard")}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </MobileLink>
                  )}

                  {/* Book Now (PUBLIC + USER) */}
                  {(!user || user.role === "USER") && (
                    <div className="px-2">
                      <Button
                        asChild
                        className="w-full"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link href="/book">Book Now</Link>
                      </Button>
                    </div>
                  )}


                  {/* ADMIN */}
                  {user?.role === "ADMIN" && (
                    <>
                      <MobileLink
                        href="/admin/reception"
                        active={isActive("/admin/reception")}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Occupancy
                      </MobileLink>
                      <MobileLink
                        href="/admin/reception/bookings"
                        active={isActive("/admin/reception/bookings")}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Bookings
                      </MobileLink>
                      <MobileLink
                        href="/admin/reception/users"
                        active={isActive("/admin/reception/users")}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Users
                      </MobileLink>
                    </>
                  )}

                  {/* OWNER */}
                  {user?.role === "OWNER" && (
                    <MobileLink
                      href="/owner/analytics"
                      active={isActive("/owner/analytics")}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Analytics
                    </MobileLink>
                  )}

                  {/* Auth */}
                  <div className="mt-4 pt-4 border-t border-border">
                    {!user ? (
                      <Button variant="ghost" asChild>
                        <Link href="/login">Log in</Link>
                      </Button>
                    ) : (
                      <Button variant="ghost" onClick={logout}>
                        Logout
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

/* ================= Helpers (UNCHANGED UI) ================= */

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        active
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, active, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </Link>
  );
}