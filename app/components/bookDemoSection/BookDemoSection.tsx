'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

export default function BookDemoSection() {
  return (
    <div className="container relative mx-auto flex flex-col items-center gap-10 px-6  ">
      <Card className="relative h-[250px] w-full overflow-hidden rounded-xl border border-muted-foreground/30 shadow-none bg-transparent">
        {/* Background image with blur */}
        <img
          src="https://www.centralaxis.com/background.png"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover blur-sm"
        />

        {/* Semi-dark overlay for contrast (theme-aware) */}
        <div className="absolute inset-0 bg-black/70 dark:bg-black/70" />

        {/* Foreground content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h4 className="text-2xl md:text-4xl font-semibold text-secondary mb-2">
            Book a Demo
          </h4>
          <p className="text-accent/70 mb-4 font-light text-sm md:text-xl">
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <Button
            className="bg-secondary text-primary hover:bg-zinc-200 font-semibold text-base"
          >
              Schedule Now
          </Button>
        </div>
      </Card>
    </div>
  );
}