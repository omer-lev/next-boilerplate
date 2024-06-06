import React from 'react'
import Header from '../Header';
import { steps } from '@/constants';

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='min-h-screen bg-muted/70 px-5 pt-16 pb-28'>
      <Header
        title='How It Works'
        subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis.'
        subtitleProps='text-primary'
        titleProps='text-muted-foreground'
      />

      {/* ASSET (replace with your demo video) */}
      <video
        src='/assets/videos/preview.mp4'
        muted
        autoPlay
        loop
        className='w-[500px] xl:w-[750px] xl:h-full mx-auto bg-transparent rounded-lg shadow-2xl'
      />

      {/* CONSTANTS (steps) */}
      <div className='flex flex-col lg:flex-row justify-evenly items-center gap-14 mt-10 lg:mt-28'>
        {steps.map((step, index) => (
          <div key={index}>
            <div className='text-center'>
              <h3 className='text-2xl lg:text-3xl font-semibold text-accent pb-1'>
                {step.title}
              </h3>
              <p className='text-base text-primary'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks;