export default function BookingCard({ booking, onRenew, onCancel }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg">{booking.resource}</h3>
          <p className="text-sm text-gray-500">{booking.type}</p>
        </div>
        <span className="text-green-600 font-medium">
          {booking.status}
        </span>
      </div>

      <div className="text-sm mt-2">
        {booking.startDate} → {booking.endDate}
      </div>

      <div className="mt-3 flex gap-3">
        <button
          onClick={() => onRenew(booking)}
          className="px-4 py-1 bg-black text-white rounded"
        >
          Renew
        </button>

        <button
          onClick={() => onCancel(booking)}
          className="px-4 py-1 border rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
