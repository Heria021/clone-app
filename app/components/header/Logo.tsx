"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center w-[36px] h-[36px]">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/logo.webp"
          alt="CentralAxis Logo"
          width={36}
          height={36}
        />
        <span className="text-2xl font-medium">CentralAxis</span>
      </Link>
    </div>
  );
}
