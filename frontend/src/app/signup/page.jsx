"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
    password: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOtp = () => {
    if (!form.phone) {
      setError("Please enter phone number");
      return;
    }
    setError("");
    setOtpSent(true);
    alert("Mock OTP sent: 123456");
  };

  const handleSignup = () => {
    const { name, email, phone, otp, password } = form;

    if (!name || !email || !phone || !otp || !password) {
      setError("All fields are required");
      return;
    }

    if (otp !== "123456") {
      setError("Invalid OTP");
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">

          <h1 className="text-2xl font-bold text-center mb-6">
            Create Your Account
          </h1>

          {error && (
            <p className="mb-4 text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          {/* Name */}
          <label className="text-sm font-medium">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mb-4"
            placeholder="Abhishek Kumar"
          />

          {/* Email */}
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mb-4"
            placeholder="user@cowork.com"
          />

          {/* Phone */}
          <label className="text-sm font-medium">Phone Number</label>
          <div className="flex gap-2 mb-4">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder="9876543210"
            />
            <button
              onClick={sendOtp}
              className="px-4 rounded-lg bg-blue-600 text-white text-sm"
            >
              Send OTP
            </button>
          </div>

          {/* OTP */}
          {otpSent && (
            <>
              <label className="text-sm font-medium">OTP</label>
              <input
                name="otp"
                value={form.otp}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-4"
                placeholder="123456"
              />
            </>
          )}

          {/* Password */}
          <label className="text-sm font-medium">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mb-6"
            placeholder="••••••••"
          />

          <button
            onClick={handleSignup}
            className="w-full py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Create Account
          </button>

          {/* Login link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-blue-600 font-medium"
            >
              Login
            </button>
          </p>

          {/* ✅ SUCCESS POPUP */}
          {success && (
            <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center rounded-2xl">
              <div className="text-center px-6">
                <h2 className="text-2xl font-bold text-green-600 mb-3">
                  Signup Successful 🎉
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Your account has been created successfully.
                </p>
                <button
                  onClick={() => router.push("/login")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium"
                >
                  Go to Login
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
