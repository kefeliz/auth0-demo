export default function Authenticate() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center max-w-md">
        <h1 className="text-red-600 text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You must be logged in to view this page.
        </p>
        <a
          href="/auth/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Log in with Auth0
        </a>
      </div>
    </main>
  );
}
