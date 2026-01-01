'use client';

export default function PodActionModal({ pod, slot, onClose }) {
  if (!pod || !slot) return null;

  const isAvailable = slot.status === 'available';

  const statusColor = {
    available: 'text-green-600',
    reserved: 'text-yellow-600',
    occupied: 'text-red-600'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[380px] rounded-2xl shadow-xl p-6 space-y-5 animate-scaleIn">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {pod.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Info */}
        <div className="space-y-1 text-sm">
          <p>
            Time:{' '}
            <span className="font-semibold">
              {slot.time}
            </span>
          </p>
          <p>
            Status:{' '}
            <span className={`font-semibold ${statusColor[slot.status]}`}>
              {slot.status}
            </span>
          </p>
        </div>

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
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  );
}
