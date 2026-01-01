'use client';

export default function SeatActionModal({ seat, onClose }) {
  if (!seat) return null;

  const isAvailable = seat.status === 'available';

  const statusColors = {
    available: 'text-green-600',
    reserved: 'text-yellow-600',
    occupied: 'text-red-600'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[380px] rounded-2xl shadow-xl p-6 space-y-5 animate-scaleIn">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-black">
            Seat {seat.label}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Status */}
        <p className="text-sm text-gray-700">
          Status:{' '}
          <span className={`font-semibold ${statusColors[seat.status]}`}>
            {seat.status}
          </span>
        </p>

        {/* Actions */}
        {isAvailable ? (
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
            Assign Booking
          </button>
        ) : (
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
            View / Cancel Booking
          </button>
        )}

        <button
          onClick={onClose}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
