"use client";

import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
      <span>🚀</span>
      <span>
        Share <span className="text-indigo-500">Me</span>
      </span>
    </Link>
  );
};

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="text-gray-600 mt-3">
            ShareMe is your go-to platform to share ideas and projects.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <Link href="/">Home</Link><br />
          <Link href="/explore">Explore</Link>
        </div>

        <div className="flex gap-4">
          <GithubIcon />
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4">
        © {year ?? "—"} ShareMe • Made with ❤️ by Ovi
      </div>
    </footer>
  );
}
