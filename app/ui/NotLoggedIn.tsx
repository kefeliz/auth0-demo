export default function NotLoggedIn() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Please log in to view your profile
        </h1>
        <a
          href="/auth/login"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Log in
        </a>
      </div>
    </main>
  );
}
