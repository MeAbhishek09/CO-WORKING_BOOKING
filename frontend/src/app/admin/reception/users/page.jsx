"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import usersData from "@/mock/users.json";
import UserCard from "@/components/reception/UserCard";

export default function ReceptionUsersPage() {
  const [users, setUsers] = useState(usersData);

  const toggleUserStatus = (user) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? {
              ...u,
              status: u.status === "ACTIVE" ? "BLOCKED" : "ACTIVE",
            }
          : u
      )
    );
  };

  const viewUser = (user) => {
    alert(
      `User: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nBookings: ${user.totalBookings}`
    );
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Reception – Users
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onToggleStatus={toggleUserStatus}
              onView={viewUser}
            />
          ))}
        </div>
      </div>
    </>
  );
}
