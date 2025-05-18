import React from 'react';
import { logos } from '../../data/logos';
import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';

const LogoCard = ({ name, url }: { name: string; url: string }) => {
  return (
    <figure
      className={cn(
        "relative h-16 w-32 flex items-center justify-center mx-4 overflow-hidden",
        // light styles
        "bg-transparent hover:bg-gray-950/[.05]",
        // dark styles
        "dark:bg-transparent dark:hover:bg-gray-50/[.05]",
      )}
    >
      <img
        alt={name}
        loading="lazy"
        className="w-24 lg:w-32"
        src={url}
        style={{ color: 'transparent', objectFit: 'scale-down' }}
      />
    </figure>
  );
};

export default function LogoCarouselSection() {
  // Split logos into two rows for better visual effect
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <div className="relative flex flex-col items-center gap-10 py-14 md:py-[72px] bg-black">
      <h2 className=" text-muted-foreground tracking-tight">
        Seamless integrations with any data center hardware
      </h2>
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:30s]">
          {firstRow.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black block md:hidden"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black block md:hidden"></div>
      </div>
    </div>
  );
}
