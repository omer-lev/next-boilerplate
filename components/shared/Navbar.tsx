import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { nav_links } from '@/constants'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center px-[7%] py-10 absolute bg-transparent max-lg:hidden'>
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

      <Button className='bg-secondary rounded-full hover:bg-muted hover:text-secondary'>
        Get Started
      </Button>
    </nav>
  )
}

export default Navbar