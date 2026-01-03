"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-blue-600 tracking-tight"
        >
          CoWork
        </Link>

        {/* Main Links */}
        <div className="flex items-center gap-6 text-sm font-medium">

          {/* PUBLIC */}
          <NavLink href="/pricing" pathname={pathname}>Pricing</NavLink>
          <NavLink href="/availability" pathname={pathname}>Availability</NavLink>
          <NavLink href="/contact" pathname={pathname}>Contact</NavLink>

          {/* NOT LOGGED IN */}
          {/* PUBLIC */}
            {/* {(!user || user?.role === "USER") && (
              <>
                <NavLink href="/pricing" pathname={pathname}>
                  Pricing
                </NavLink>

                <NavLink href="/availability" pathname={pathname}>
                  Availability
                </NavLink>

                <NavLink href="/contact" pathname={pathname}>
                  Contact
                </NavLink>
              </>
            )} */}


          {/* USER */}
          {user?.role === "USER" && (
            <>
              <NavButton href="/user/dashboard" pathname={pathname}>
                Dashboard
              </NavButton>
              <Logout onClick={logout} />
            </>
          )}

          {/* ADMIN (RECEPTION) */}
          {user?.role === "ADMIN" && (
            <>
              <NavLink
                href="/admin/reception"
                pathname={pathname}
              >
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

/* ---------- Helpers ---------- */

function NavLink({ href, pathname, children }) {
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`transition ${
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
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
      className={`px-4 py-2 rounded-lg transition ${
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
      className="text-gray-500 hover:text-red-500 transition"
    >
      Logout
    </button>
  );
}
