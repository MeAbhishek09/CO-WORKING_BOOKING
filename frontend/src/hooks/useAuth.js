"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  // Load from storage on refresh
  useEffect(() => {
    const saved = localStorage.getItem("cowork_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("cowork_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("cowork_user");
    setUser(null);
    window.location.href = "/login";
  };

  return { user, login, logout };
}
