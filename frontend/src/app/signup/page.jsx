'use client';

export default function SignupPage() {
  function handleSignup() {
    // frontend-only mock
    console.log('User signed up with role: user');
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-80 space-y-4">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <input placeholder="Email" className="border p-2 w-full" />
        <input placeholder="Password" className="border p-2 w-full" />
        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
