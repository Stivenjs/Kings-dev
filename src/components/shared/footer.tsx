import Link from "next/link";
import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="h-6 w-6" />
              <span className="font-bold text-white">KingsDev</span>
            </Link>
            <p className="mt-2 text-sm">
              © 2023 KingsDev, Inc. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Our Expertise</h3>
            <ul className="mt-4 space-y-2">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Business Intelligence</li>
              <li>DevOps</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Connect With Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#">LinkedIn</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
