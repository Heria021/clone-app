import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className=" border-t border-muted-foreground/40 bg-black">

            <div className="container  w-full  flex mx-auto flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 ">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Image
                        src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
                        alt="CentralAxis Logo"
                        width={36}
                        height={36}
                    >
                    </Image>
                    <p className='text-center text-secondary text-sm leading-loose md:text-left'>
                        Copyright © 2025
                    </p>
                </div>
            </div>
        </div>
    );
}