"use client";

import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import React from 'react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <Button
      aria-label="Toggle Menu"
      className="h-10 w-10 flex items-center justify-center rounded border-muted-foreground/40 border lg:hidden"
      onClick={onClick}
      variant="ghost"
      size="icon"
    >
      <AlignJustify className="h-7 w-7" size={28} />
    </Button>
  );
}
