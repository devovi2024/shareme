"use client";

import Link from "next/link";
import { HomeIcon, CompassIcon, PlusCircleIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
      <span className="text-indigo-700">🚀</span>
      <span>
        Share <span className="text-indigo-500">Me</span>
      </span>
    </Link>
  );
};

export default function Header() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div>
        <Logo />
      </div>

      <nav className="flex gap-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <HomeIcon size={20} />
          Home
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <CompassIcon size={20} />
          Explore
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {isAuth ? (
          <>
            <Link href="/submit">
              <Button variant="default" className="flex items-center gap-1">
                <PlusCircleIcon size={18} />
                Submit
              </Button>
            </Link>

            <Link href="/profile">
              <Avatar className="w-10 h-10 cursor-pointer">
                <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
                <AvatarFallback>Ovi</AvatarFallback>
              </Avatar>
            </Link>
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="default">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
