"use client";

import Navbar from "@/components/layout/Navbar";
import revenueData from "@/mock/revenue.json";

export default function OwnerAnalyticsPage() {
  const totalRevenue = revenueData.reduce(
    (sum, r) => sum + r.amount,
    0
  );

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Owner Analytics
            </h1>
            <p className="text-gray-700">
              Revenue and workspace performance overview
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold text-blue-600 mt-3">
                ₹{totalRevenue}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-sm text-gray-500">Active Seats</p>
              <p className="text-3xl font-bold mt-3">42</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-sm text
