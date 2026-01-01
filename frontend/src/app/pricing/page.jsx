"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function PricingPage() {
  const router = useRouter();

  const pricing = [
    {
      title: "Seat",
      description: "Perfect for individual focused work",
      daily: 300,
      weekly: 1800,
      monthly: 6000,
    },
    {
      title: "Pod",
      description: "Private space for calls or teams",
      daily: 700,
      weekly: 4200,
      monthly: 14000,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple & Transparent Pricing
            </h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              Choose flexible plans that suit your working style.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Daily</span>
                    <span className="font-medium">₹{item.daily}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly</span>
                    <span className="font-medium">₹{item.weekly}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly</span>
                    <span className="font-medium text-blue-600">
                      ₹{item.monthly}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => router.push("/availability")}
                  className="mt-8 w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Check Availability
                </button>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-14 text-sm text-gray-600">
            All prices include Wi-Fi, power backup, and basic amenities.
          </div>
        </div>
      </section>
    </>
  );
}
