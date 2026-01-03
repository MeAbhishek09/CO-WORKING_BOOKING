"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BookingTable from "@/components/reception/BookingTable";
import BookingActionsModal from "@/components/reception/BookingActionsModal";
import bookings from "@/mock/adminBookings.json";

export default function ReceptionBookingsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">
          All User Bookings
        </h1>

        <BookingTable
          bookings={bookings}
          onAction={setSelected}
        />

        <BookingActionsModal
          booking={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </>
  );
}
