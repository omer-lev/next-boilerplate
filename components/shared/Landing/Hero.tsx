import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import Curve from '../Curve';

const Hero = () => {
  return (
    <section className='h-screen flex flex-col lg:flex-row gap-[10%] 
    py-32 px-7 lg:px-[5%] xl:px-[12%] lg:pt-[20%] xl:pt-[15%] 
    bg-accent overflow-hidden relative z-[-10] mb-[-1px]'
    >
      <div className='header text-center lg:text-start z-50'>
        <h1 className='font-extrabold text-3xl lg:text-4xl pb-5 text-accent-foreground'>
          Your epic <span className='text-muted'>hero</span> component <span className='text-muted'>title</span>
        </h1>

        <p className='font-light text-sm lg:text-base lg:font-normal text-secondary xl:w-2/3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus iste aperiam sunt ex rem tempore obcaecati quod dolore alias? Fugit.
        </p>

        <Button className='text-lg my-10 font-normal rounded-xl p-6'>
          Try it now!
        </Button>
      </div>

      {/* ASSET (hero section image) */}
      <Image 
        src='/assets/images/hero.svg' 
        alt='hero image' 
        width={1920} 
        height={1080} 
        className='w-72 md:w-96 lg:w-2/5 mx-auto h-fit z-50'
      />
      
      <Curve />
    </section>
  )
}

export default Hero;