"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
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
            </Link>
          )}

          {/* USER */}
          {user?.role === "USER" && (
            <>
              <NavButton href="/user/dashboard" pathname={pathname}>
                Dashboard
              </NavButton>
              <Logout onClick={logout} />
            </>
          )}

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

          {/* OWNER */}
          {user?.role === "OWNER" && (
            <>
              <NavButton href="/owner/analytics" pathname={pathname}>
                Analytics
              </NavButton>
              <Logout onClick={logout} />
            </>
          )}
        </div>
      </div>
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
  );
}
