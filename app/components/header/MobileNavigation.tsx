"use client";

import React from 'react';
import Image from 'next/image';
import { DropdownMenu } from './types';
import MobileMenuItem from './MobileMenuItem';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  dropdownMenus: DropdownMenu[];
  expandedMenus: Record<string, boolean>;
  toggleMenuExpansion: (menuLabel: string) => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
  dropdownMenus,
  expandedMenus,
  toggleMenuExpansion
}: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.webp"
            alt="CentralAxis Logo"
            width={36}
            height={36}
          />
          <span className="text-2xl font-medium text-secondary">CentralAxis</span>
        </div>
        <Button
          onClick={onClose}
          aria-label="Close menu"
          variant="ghost"
          size="icon"
          className="h-10 w-10"
        >
          <X className="h-7 w-7" size={28}/>
        </Button>
      </div>
      <div className="flex flex-col px-6 py-8">
        {dropdownMenus.map((menu, index) => (
          <MobileMenuItem
            key={index}
            menu={menu}
            isExpanded={!!expandedMenus[menu.label]}
            onToggle={() => toggleMenuExpansion(menu.label)}
            onItemClick={onClose}
          />
        ))}
      </div>
    </div>
  );
}
