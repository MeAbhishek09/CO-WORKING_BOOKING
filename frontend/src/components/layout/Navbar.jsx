"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-blue-600 tracking-tight"
        >
          CoWork
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {/* Always visible (public) */}
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/availability">Availability</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* Not logged in */}
          {!user && (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </Link>
          )}

          {/* USER */}
          {user?.role === "USER" && (
            <>
              <Link
                href="/user/dashboard"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="text-gray-500 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* ADMIN */}
          {user?.role === "ADMIN" && (
            <>
              <Link
                href="/admin/reception"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Reception
              </Link>

              <button
                onClick={logout}
                className="text-gray-500 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* OWNER */}
          {user?.role === "OWNER" && (
            <>
              <Link
                href="/owner/analytics"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Analytics
              </Link>

              <button
                onClick={logout}
                className="text-gray-500 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

/* Reusable nav link */
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-blue-600 transition-colors"
    >
      {children}
    </Link>
  );
}
