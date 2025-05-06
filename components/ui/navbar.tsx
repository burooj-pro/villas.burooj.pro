'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent px-6 py-4">
      <div className="container mx-auto flex items-center justify-start">
        <Link href="/">
          <Image
             src="https://hel1.your-objectstorage.com/burooj-prod/images/3.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

