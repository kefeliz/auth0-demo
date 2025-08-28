"use client";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Auth0 Demo App
      </h1>
      <p className="text-gray-600 text-center max-w-md mb-8">
        <span className="font-semibold">Auth0</span> integration sample in
        Next.js.
      </p>

      {!user ? (
        <div className="flex gap-4">
          <a
            href="/auth/login?screen_hint=signup"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Sign up
          </a>
          <a
            href="/auth/login"
            className="px-5 py-2 rounded-lg border bg-black font-medium hover:bg-emerald-700 transition"
          >
            Log in
          </a>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 text-center">
          <img
            src={user.picture as string}
            alt="avatar"
            className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 shadow"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <a
            href="/auth/logout"
            className="inline-block mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Log out
          </a>
        </div>
      )}
    </main>
  );
}
