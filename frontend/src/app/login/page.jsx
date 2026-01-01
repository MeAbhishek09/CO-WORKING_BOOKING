'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const router = useRouter();
  const { role } = useAuth();

  function handleLogin() {
    if (role === 'admin') router.push('/admin/reception');
    else if (role === 'owner') router.push('/owner/analytics');
    else router.push('/user/dashboard');
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-black text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
