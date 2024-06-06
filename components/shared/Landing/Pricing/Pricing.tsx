'use client';

import { useState } from 'react';
import Header from '../../Header'
import { plans } from '@/constants'
import PlanCard from './PlanCard'
import { Switch } from '@/components/ui/switch'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id='pricing' className='min-h-screen bg-primary pt-20 pb-28 px-5'>
      <Header
        title='Pricing'
        subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis.'
        titleProps={'text-accent pb-2'}
      />

      <div className='flex justify-center items-center gap-3 text-stone-100/70 pb-16'>
        <label htmlFor="switch" className='text-sm'>Monthly</label>
        <Switch onClick={() => setIsYearly((prev: boolean) => !prev)} />
        <label htmlFor="switch" className='text-sm'>Yearly</label>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
        {/* CONSTANTS (plans) */}
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} isYearly={isYearly} />
        ))}
      </div>
    </section>
  )
}

export default Pricing