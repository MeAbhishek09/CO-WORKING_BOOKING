"use client";

export default function BookingTable({ bookings, onAction }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">User</th>
            <th className="p-3">Resource</th>
            <th className="p-3">Date</th>
            <th className="p-3">Slot</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="p-3">
                <div className="font-medium">{b.user}</div>
                <div className="text-xs text-gray-500">{b.email}</div>
              </td>

              <td className="p-3 text-center">{b.resource}</td>
              <td className="p-3 text-center">{b.date}</td>
              <td className="p-3 text-center">{b.slot}</td>

              <td className="p-3 text-center">
                <span className="px-2 py-1 rounded text-xs bg-blue-100">
                  {b.status}
                </span>
              </td>

              <td className="p-3 text-center">
                <button
                  onClick={() => onAction(b)}
                  className="text-blue-600 font-medium"
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
