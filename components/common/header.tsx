"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import {
  CompassIcon,
  HomeIcon,
  LoaderIcon,
  SparklesIcon,
  Menu,
  X,
} from "lucide-react";

import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "../ui/button";
import CustomUserButton from "./custom-user-button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, icon: Icon, children }: any) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition"
    >
      {Icon && <Icon className="size-4" />}
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <SparklesIcon className="size-4 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl">
              i<span className="text-primary">Built</span>This
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/" icon={HomeIcon}>Home</NavLink>
            <NavLink href="/explore" icon={CompassIcon}>Explore</NavLink>
            <NavLink href="/admin">Admin</NavLink>
          </nav>

          {/* AUTH DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <Suspense fallback={<LoaderIcon className="animate-spin" />}>
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <Button className="rounded-xl">Sign Up</Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Button asChild className="rounded-xl">
                  <Link href="/submit">
                    <SparklesIcon className="size-4 mr-2" />
                    Submit
                  </Link>
                </Button>

                <CustomUserButton />
              </SignedIn>
            </Suspense>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-2 border rounded-xl bg-background shadow-lg p-3 space-y-2 animate-in fade-in slide-in-from-top-2">
            <NavLink href="/" icon={HomeIcon}>Home</NavLink>
            <NavLink href="/explore" icon={CompassIcon}>Explore</NavLink>
            <NavLink href="/admin">Admin</NavLink>

            <div className="pt-2 border-t space-y-2">
              <Suspense fallback={<LoaderIcon className="animate-spin" />}>
                <SignedOut>
                  <SignInButton />
                  <SignUpButton>
                    <Button className="w-full rounded-xl">Sign Up</Button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <Button asChild className="w-full rounded-xl">
                    <Link href="/submit">
                      <SparklesIcon className="size-4 mr-2" />
                      Submit
                    </Link>
                  </Button>

                  <div className="flex justify-center">
                    <CustomUserButton />
                  </div>
                </SignedIn>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}