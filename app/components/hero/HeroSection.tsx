import React from 'react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden pb-10">
      {/* Grid Background */}
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-muted-foreground/40">
        <div className="col-span-1 flex h-full items-center justify-center"></div>
        <div className="col-span-1 flex h-full items-center justify-center border-x border-muted-foreground/40 "></div>
        <div className="col-span-1 flex h-full items-center justify-center"></div>
      </div>

      {/* Blur Glow - Visible on all screen sizes */}
      <div className="pointer-events-none absolute left-1/2 top-5/5 z-0 aspect-square w-[140vw] sm:w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6] opacity-40 sm:opacity-24 blur-[150px] md:blur-[120px]" />

      {/* Content */}
      <div className="flex flex-col divide-y divide-muted-foreground/40 pt-[35px]">
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="text-center text-secondary text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] md:tracking-[-2.16px] text-text-primary dark:text-dark-text-primary">
              Data Center Management Software
            </h1>
            <h2 className="max-w-2xl text-muted-foreground text-center text-md md:text-lg ">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </h2>
            <h2 className="max-w-2xl text-muted-foreground text-center text-md md:text-lg ">
              Built for colocations, data centers, and cloud providers.
            </h2>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            <Button
              variant="default"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-secondary cursor-pointer w-full h-14 px-5 text-base font-normal rounded-none"
            >
                Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}