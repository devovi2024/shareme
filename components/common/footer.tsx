"use client";

import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-gray-600">
            ShareMe is your go-to platform to share ideas, projects, and discover new things with the community.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/explore" className="hover:text-indigo-600 transition-colors">Explore</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-indigo-600"><GithubIcon size={24} /></Link>
            <Link href="#" className="hover:text-indigo-600"><TwitterIcon size={24} /></Link>
            <Link href="#" className="hover:text-indigo-600"><InstagramIcon size={24} /></Link>
            <Link href="#" className="hover:text-indigo-600"><FacebookIcon size={24} /></Link>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <span>© {currentYear} ShareMe. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Made with ❤️ by Ovi</span>
      </div>
    </footer>
  );
}
