"use client";

import Link from "next/link";
import { HomeIcon, CompassIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-2 text-3xl font-extrabold text-indigo-600 hover:text-indigo-700 transition-colors"
  >
    <span className="text-indigo-700 text-4xl animate-bounce">🚀</span>
    <span className="text-indigo-600">
      Share <span className="text-indigo-500">Me</span>
    </span>
  </Link>
);

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-xl shadow-2xl px-10 py-5 flex justify-between items-center sticky top-0 z-50 border-b border-gray-200">
      <Logo />

      <nav className="flex gap-10 text-gray-700 font-semibold uppercase tracking-wide">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          <HomeIcon size={22} />
          Home
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-2 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          <CompassIcon size={22} />
          Explore
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <SignedIn>
          <Link href="/submit">
            <Button className="flex items-center gap-2 bg-indigo-600 text-white shadow-lg rounded-full px-5 py-2 hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
              <PlusCircleIcon size={18} />
              Submit
            </Button>
          </Link>

          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "w-12 h-12 shadow-lg ring-2 ring-indigo-500 rounded-full hover:scale-110 transition-transform duration-300",
              },
            }}
          />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button className="border-indigo-500 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300">
              Sign In
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}
