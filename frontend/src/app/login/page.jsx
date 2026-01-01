"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { mockUsers } from "@/mock/users";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const found = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      setError("Invalid email or password");
      return;
    }

    login({
      name: found.name,
      email: found.email,
      role: found.role,
    });

    if (found.role === "USER") router.push("/user/dashboard");
    if (found.role === "ADMIN") router.push("/admin/reception");
    if (found.role === "OWNER") router.push("/owner/analytics");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Login to CoWork
          </h1>

          {error && (
            <p className="mb-4 text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@cowork.com"
          />

          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <button
            onClick={handleLogin}
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Demo credentials */}
          <div className="mt-6 text-xs text-gray-600 space-y-1">
            <p><b>User:</b> user@cowork.com / user123</p>
            <p><b>Admin:</b> admin@cowork.com / admin123</p>
            <p><b>Owner:</b> owner@cowork.com / owner123</p>
          </div>
        </div>
      </div>
    </>
  );
}
