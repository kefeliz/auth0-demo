import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { auth0 } from "@/lib/auth0";
import Navbar from "./ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth0 Demo",
  description: "Auth0 Demo with Next.js 13 and TypeScript",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth0.getSession();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          user={
            session?.user
              ? {
                  name: session.user.name ?? "Unknown User",
                  picture: session.user.picture,
                }
              : null
          }
        />
        {children}
      </body>
    </html>
  );
}
