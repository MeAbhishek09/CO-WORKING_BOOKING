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
              <p className="text-sm text-gray-500">Active Pods</p>
              <p className="text-3xl font-bold mt-3">12</p>
            </div>
          </div>

          {/* Revenue Table */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Month</th>
                  <th className="p-4 text-right">Revenue (₹)</th>
                </tr>
              </thead>
              <tbody>
                {revenueData.map((row) => (
                  <tr
                    key={row.month}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">{row.month}</td>
                    <td className="p-4 text-right font-medium">
                      ₹{row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Charts Placeholder */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-md text-center text-gray-500">
            Revenue & occupancy charts will be added here
          </div>
        </div>
      </section>
    </>
  );
}
