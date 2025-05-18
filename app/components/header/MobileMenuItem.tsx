"use client";

import React from 'react';
import Link from 'next/link';
import { DropdownMenu } from './types';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuItemProps {
  menu: DropdownMenu;
  isExpanded: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

export default function MobileMenuItem({
  menu,
  isExpanded,
  onToggle,
  onItemClick
}: MobileMenuItemProps) {
  return (
    <div className="">
      <Button
        onClick={onToggle}
        variant="ghost"
        className="flex justify-between items-center w-full py-4 px-6 text-secondary font-medium text-base h-auto whitespace-normal text-left"
      >
        <span className="flex-1 pr-4 text-center">{menu.label}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} ml-2 h-7 w-7`}
          size={28}
        />
      </Button>
      {isExpanded && (
        <div className="px-6 pb-4">
          {menu.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item.href}
              className="flex justify-between items-center w-full py-4 px-6 text-secondary font-medium text-base h-auto whitespace-normal"
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
