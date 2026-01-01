"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Co-Working Spaces for Modern Teams
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Book seats and private pods with real-time availability, flexible
            plans, and zero hassle.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/availability")}
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Check Availability
            </button>

            <button
              onClick={() => router.push("/pricing")}
              className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 hover:bg-blue-50 transition"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Check Availability",
                desc: "See real-time availability of seats and pods.",
              },
              {
                title: "Book Instantly",
                desc: "Choose daily, weekly, or monthly plans.",
              },
              {
                title: "Start Working",
                desc: "Walk in and focus on what matters.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-14">
            Choose Your Workspace
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Seat */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dedicated Seats
              </h3>
              <p className="text-gray-600 mb-6">
                Affordable, comfortable workspaces designed for focused
                individual work.
              </p>
              <button
                onClick={() => router.push("/availability")}
                className="text-blue-600 font-medium hover:underline"
              >
                View Seats →
              </button>
            </div>

            {/* Pod */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Private Pods
              </h3>
              <p className="text-gray-600 mb-6">
                Sound-isolated pods ideal for calls, meetings, and teams.
              </p>
              <button
                onClick={() => router.push("/availability")}
                className="text-blue-600 font-medium hover:underline"
              >
                View Pods →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-8">
          Find the perfect workspace in seconds.
        </p>
        <button
          onClick={() => router.push("/availability")}
          className="px-10 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Book Your Space
        </button>
      </section>
    </>
  );
}
