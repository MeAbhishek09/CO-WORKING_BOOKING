"use client";

export default function BookingActionsModal({ booking, onClose }) {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Manage Booking</h2>

        <div className="text-sm text-gray-600">
          <p><b>User:</b> {booking.user}</p>
          <p><b>Resource:</b> {booking.resource}</p>
          <p><b>Date:</b> {booking.date}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3">
          <Action label="Reassign Seat" />
          <Action label="Extend Booking" />
          <Action label="Cancel Booking" danger />
          <Action label="Mark No-Show" danger />
          <Action label="Override Status" />
          <Action label="Manual Booking" />
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-2 border rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Action({ label, danger }) {
  return (
    <button
      className={`py-2 rounded text-sm font-medium ${
        danger
          ? "bg-red-100 text-red-700"
          : "bg-blue-100 text-blue-700"
      }`}
      onClick={() => alert(label)}
    >
      {label}
    </button>
  );
}
