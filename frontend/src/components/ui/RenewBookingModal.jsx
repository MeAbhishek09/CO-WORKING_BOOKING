"use client";

import { useState } from "react";

export default function RenewBookingModal({ booking, onClose, onConfirm }) {
  const [plan, setPlan] = useState("MONTHLY");

  const pricing = {
    SEAT: { DAILY: 300, WEEKLY: 1800, MONTHLY: 6000 },
    POD: { DAILY: 700, WEEKLY: 4200, MONTHLY: 14000 },
  };

  const amount = pricing[booking.type][plan];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Renew {booking.resource}
        </h2>

        {/* Plan */}
        <label className="block text-sm mb-1">Select Plan</label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        >
          <option value="DAILY">Daily</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
        </select>

        {/* Start Date */}
        <label className="block text-sm mb-1">Start Date</label>
        <input
          type="date"
          defaultValue={booking.endDate}
          className="w-full border rounded px-3 py-2 mb-4"
        />

        {/* Price */}
        <div className="flex justify-between items-center mb-6">
          <span className="font-medium">Amount</span>
          <span className="text-lg font-semibold">₹{amount}</span>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm({ plan, amount })}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
