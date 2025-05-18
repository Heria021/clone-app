"use client";

import React from 'react';
import Link from 'next/link';
import { DropdownMenu } from './types';

interface DesktopNavigationProps {
  dropdownMenus: DropdownMenu[];
}

export default function DesktopNavigation({ dropdownMenus }: DesktopNavigationProps) {
  return (
    <div className="hidden items-center space-x-8 lg:flex">
      {dropdownMenus.map((menu, index) => (
        <div key={index} className="group relative">
          <button className="flex items-center text-sm font-medium text-secondary hover:opacity-70 cursor-pointer">
            {menu.label}
            <span className="ml-1 text-xs">▼</span>
          </button>
          <div className="invisible absolute right-0 mt-2 w-64 rounded-sm border border-secondary bg-black opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="py-1">
              {menu.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-white hover:opacity-70 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
