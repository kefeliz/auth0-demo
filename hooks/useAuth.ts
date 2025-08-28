"use client";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useAuth(redirectToLogin: boolean = true) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user && redirectToLogin) {
      router.push("/authenticate");
    }

    if (user && pathname === "/authenticate") {
      router.push("/");
    }
  }, [isLoading, user, redirectToLogin, router, pathname]);

  return { user, error, isLoading };
}
