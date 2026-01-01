"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [role, setRole] = useState("USER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // mock login
    login({
      name: "Abhishek",
      role, // USER | ADMIN | OWNER
    });

    if (role === "USER") router.push("/user/dashboard");
    if (role === "ADMIN") router.push("/admin/reception");
    if (role === "OWNER") router.push("/owner/analytics");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md border rounded-xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Login
          </h1>

          {/* Email */}
          <label className="text-sm mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="you@example.com"
          />

          {/* Password */}
          <label className="text-sm mb-1 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="••••••••"
          />

          {/* Role (temporary for dev) */}
          <label className="text-sm mb-1 block">Login as</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-6"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin / Reception</option>
            <option value="OWNER">Owner</option>
          </select>

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            * This is a mock login. Backend auth will be added later.
          </p>
        </div>
      </div>
    </>
  );
}
