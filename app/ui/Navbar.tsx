import Link from "next/link";

interface NavbarProps {
  user: { name: string; picture?: string } | null;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Auth0 Demo - Next.js
      </Link>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <a
              href="/auth/login?screen_hint=signup"
              className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            >
              Sign up
            </a>
            <a
              href="/auth/login"
              className="px-3 py-1 rounded-lg border border-gray-400 hover:bg-gray-800 transition"
            >
              Log in
            </a>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Welcome, {user.name}</span>
            {user.picture && (
              <img
                src={user.picture}
                alt="profile"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
            )}
            <Link
              href="/profile"
              className="px-3 py-1 rounded-lg bg-green-600 hover:bg-green-700 transition"
            >
              Profile
            </Link>
            <a
              href="/auth/logout"
              className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              Log out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
