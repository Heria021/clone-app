"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define dropdown menu types
type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenu = {
  label: string;
  items: DropdownItem[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define dropdown menus
  const dropdownMenus: DropdownMenu[] = [
    {
      label: 'Data Center Infrastructure Management',
      items: [
        { label: 'Monitoring Devices', href: '/dc-management/monitoring' },
        { label: 'Asset Tracking', href: '/dc-management/asset-management' },
        { label: 'Network Management', href: '/dc-management/networking' },
        { label: 'Change Managmeent', href: '/dc-management/change-management' },
        { label: 'Colocation Management', href: '/dc-management/colocation' },
        { label: 'Data Center Planner', href: '/dc-management/dc-planner' },
        { label: 'Firmware Management', href: '/dc-management/firmware' },
        { label: 'IP Address Management', href: '/dc-management/ipam' },
        { label: 'Customer Portal', href: '/dc-management/customer-portal' },
        { label: 'Custom Insights', href: '/dc-management/insights' },
        { label: 'Custom Data Center Solutions', href: '/dc-management/custom-solutions' },
      ],
    },
    {
      label: 'Intelligence Solutions',
      items: [
        { label: 'Digital Twins', href: '/intelligence/digital-twins' },
        { label: 'Smart Power Mapping', href: '/intelligence/power-mapping' },
        { label: 'Predictive Failure and Alerting', href: '/intelligence/predictive-failure' },
        { label: 'Smart Control Systems', href: '/intelligence/control-systems' },
        { label: 'Automated Discovery', href: '/intelligence/discovery' },
      ],
    },
    {
      label: 'Data Center Compliance',
      items: [
        { label: 'DCOI Compliance', href: '/compliance/dcoi' },
        { label: '(EU) 2023/1791', href: '/compliance/eu-2023-1791' },
        { label: 'EN 50600', href: '/compliance/en-50600' },
        { label: 'LEED Certification', href: '/compliance/leed' },
        { label: 'ISO/IEC 30134-2', href: '/compliance/iso-iec-30134-2' },
        { label: '(EPA) ENERGY STAR', href: '/compliance/energy-star' },
        { label: 'European Commission Joint Research Centre (JRC)', href: '/compliance/ec-jrc' },
      ],
    },
    {
      label: 'Sustainability Blog',
      items: [
        { label: 'Energy Efficiency', href: '/energy-solutions/pue-tracking' },
        { label: 'Stranded Energy Map', href: '/energy-solutions/energy-map' },
        { label: 'Environmental Product Declaration', href: '/energy-solutions/environmental-product-declaration' },
        { label: 'Renewables Integration', href: '/energy-solutions/renewables-integration' },
        { label: 'Power Resource Management', href: '/energy-solutions/power-resource-managment' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-black text-white border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo section */}
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

        {/* Desktop navigation */}
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

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          className="flex items-center justify-center rounded border border-gray-700 p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>

        {/* Mobile menu (hidden by default) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4">
              {dropdownMenus.map((menu, index) => (
                <div key={index} className="py-2">
                  <div className="font-medium text-white">{menu.label}</div>
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    {menu.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
