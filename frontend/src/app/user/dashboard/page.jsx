"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import bookings from "@/mock/bookings.json";
import BookingCard from "@/components/ui/BookingCard";
import RenewBookingModal from "@/components/ui/RenewBookingModal";

export default function UserDashboard() {
  const active = bookings.filter(b => b.status === "ACTIVE");
  const history = bookings.filter(b => b.status !== "ACTIVE");

  const [renewBooking, setRenewBooking] = useState(null);

  const handleRenew = (booking) => {
    setRenewBooking(booking);
  };

  const handleCancel = (booking) => {
    alert(`Cancel ${booking.resource}`);
  };

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          My Dashboard
        </h1>

        {/* Active Bookings */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Active Bookings
          </h2>

          {active.length === 0 && (
            <p className="text-gray-500">
              No active bookings
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {active.map(b => (
              <BookingCard
                key={b.id}
                booking={b}
                onRenew={handleRenew}
                onCancel={handleCancel}
              />
            ))}
          </div>
        </section>

        {/* Booking History */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Booking History
          </h2>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Resource</th>
                  <th className="p-2 text-center">Duration</th>
                  <th className="p-2 text-center">Amount</th>
                  <th className="p-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map(b => (
                  <tr key={b.id} className="border-t">
                    <td className="p-2">{b.resource}</td>
                    <td className="p-2 text-center">
                      {b.startDate} → {b.endDate}
                    </td>
                    <td className="p-2 text-center">
                      ₹{b.amount}
                    </td>
                    <td className="p-2 text-center">
                      {b.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Renew Modal */}
        {renewBooking && (
          <RenewBookingModal
            booking={renewBooking}
            onClose={() => setRenewBooking(null)}
            onConfirm={(data) => {
              alert(
                `Renew ${renewBooking.resource}\nPlan: ${data.plan}\nAmount: ₹${data.amount}`
              );
              setRenewBooking(null);
            }}
          />
        )}
      </div>
    </>
  );
}
