import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import ProfileMenu from "./ProfileMenu";
import LoginControls from "./LoginControls";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Auth0 Demo - Next.js
      </Link>

      <div className="flex items-center gap-4">
        {!user ? <LoginControls /> : <ProfileMenu user={user} />}
      </div>
    </nav>
  );
}
