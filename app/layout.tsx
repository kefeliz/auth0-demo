"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "./ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth();

  return (
    <html lang="en">
      <title>Auth0 Demo</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          user={
            user
              ? {
                  name: user.name ?? "Unknown User",
                  picture: user.picture,
                }
              : null
          }
        />
        {children}
      </body>
    </html>
  );
}
