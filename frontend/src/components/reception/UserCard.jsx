// path: frontend/src/components/reception/UserCard.jsx
"use client";

export default function UserCard({ user, onToggleStatus, onView }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">
            {user.name}
          </h3>
          <p className="text-sm text-gray-600">
            {user.email}
          </p>
          <p className="text-sm text-gray-600">
            {user.phone}
          </p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            user.status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.status}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm">
        <p>
          Total Bookings:{" "}
          <span className="font-medium">
            {user.totalBookings}
          </span>
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onView(user)}
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            View
          </button>

          <button
            onClick={() => onToggleStatus(user)}
            className={`px-3 py-1 rounded text-white ${
              user.status === "ACTIVE"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {user.status === "ACTIVE" ? "Block" : "Unblock"}
          </button>
        </div>
      </div>
    </div>
  );
}
