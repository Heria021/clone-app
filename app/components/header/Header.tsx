"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileNavigation from './MobileNavigation';
import { dropdownMenus } from './data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMenuExpansion = (menuLabel: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuLabel]: !prev[menuLabel],
    }));
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black text-white border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo section */}
        <Logo />

        {/* Desktop navigation */}
        <DesktopNavigation dropdownMenus={dropdownMenus} />

        {/* Mobile menu button */}
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />

        {/* Mobile navigation */}
        <MobileNavigation
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          dropdownMenus={dropdownMenus}
          expandedMenus={expandedMenus}
          toggleMenuExpansion={toggleMenuExpansion}
        />
      </div>
    </header>
  );
}
