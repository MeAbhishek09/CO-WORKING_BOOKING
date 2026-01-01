'use client';

import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔧 MOCK DATA (frontend-only)
    const mockUser = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com'
    };

    const mockRole = 'admin'; // 'user' | 'admin' | 'owner'

    setUser(mockUser);
    setRole(mockRole);
    setLoading(false);
  }, []);

  return { user, role, loading };
}
