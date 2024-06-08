import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { nav_links } from '@/constants'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ArrowRight, ChevronsRight, MoveRight } from 'lucide-react'

const Navbar = () => {

  return (
    <nav className='w-full flex justify-between items-center px-[7%] py-10 absolute bg-transparent max-lg:hidden z-20'>
      <Link href='/'>
        {/* ASSET */}
        <Image
          src='/next.svg'
          alt='Logo'
          width={100}
          height={100}
        />
      </Link>

      <div className='links'>
        {nav_links.map((link, index) => (
          <Button
            asChild
            variant='link'
            key={index}
            className='text-accent-foreground text-base font-normal underline-offset-8 hover:text-muted'
          >
            <Link href={link.href}>{link.title}</Link>
          </Button>
        ))}
      </div>

      <div className='flex gap-5'>
        <SignedOut>
          <Button variant='outline' className='text-primary bg-transparent border-muted hover:text-muted hover:bg-secondary hover:border-none rounded-full'>
            <SignInButton />
          </Button>
        </SignedOut>

        <Button className='bg-secondary rounded-full hover:bg-muted hover:text-secondary hover:stroke-secondary '>
          Get Started
          <ChevronsRight size={18} className='' />
        </Button>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar