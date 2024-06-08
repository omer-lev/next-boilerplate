'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { nav_links } from '@/constants';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center px-[7%] py-10 absolute top-0 bg-transparent lg:hidden z-20'>
      <Link href='/'>
        {/* ASSET */}
        <Image
          src='/next.svg'
          alt='Logo'
          width={75}
          height={75}
        />
      </Link>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger>
          <Menu size={24} />
        </SheetTrigger>

        <SheetContent className='bg-muted/95'>
          <SheetHeader>
            <SheetTitle className='mx-auto my-7'>
              {/* ASSET */}
              <Image
                src='/next.svg'
                alt='Logo'
                width={75}
                height={75}
              />
            </SheetTitle>

            <SheetDescription className='flex flex-col gap-7 items-center'>
              {/* CONSTANTS (nav_links) */}
              {nav_links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className='hover:underline underline-offset-4 text-lg'
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}

              <Button asChild className='mt-7 w-4/5'>
                {/* LINK */}
                <Link href='/#'>
                  Get Started
                </Link>
              </Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </nav>
  )
}

export default MobileNavbar;