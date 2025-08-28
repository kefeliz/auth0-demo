"use client";
import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  if (!user) {
    return null;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src={user.picture as string}
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <span
            className={`mt-2 inline-block px-3 py-1 text-sm rounded-full ${
              user.email_verified
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.email_verified ? "Email verified" : "Email not verified"}
          </span>
        </div>

        <div className="mt-6 space-y-3 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Name:</span>
            <span>{user.given_name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Last Name:</span>
            <span>{user.family_name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Nickname:</span>
            <span>{user.nickname}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">ID (sub):</span>
            <span className="truncate max-w-[180px]">{user.sub}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/auth/logout"
            className="inline-block px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            Log out
          </a>
        </div>
      </div>
    </main>
  );
}
