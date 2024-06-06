'use client';

import React, { use, useEffect, useState } from 'react'
import Header from '../../Header';
import { use_cases } from '@/constants';

import { Separator } from "@/components/ui/separator";
import CaseCard from './CaseCard';

const UseCases = () => {
  const [separatorOrientation, setSeparatorOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 1024 && setSeparatorOrientation('horizontal');
      window.innerWidth >= 1024 && setSeparatorOrientation('vertical');
    });
  }, [])

  return (
    <section id='use-cases' className='bg-muted pt-20 pb-28 px-5'>
      <Header
        title='Use Cases'
        subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis.'
        subtitleProps='text-primary'
      />

      <ul className='bg-accent shadow-2xl w-11/12 mx-auto flex flex-col lg:flex-row text-center px-3 rounded-lg'>
        {/* CONSTANTS (use_cases) */}
        {use_cases.map((use_case, index) => (
          <li key={index} className='lg:flex'>
            <CaseCard {...use_case} />

            {index !== use_cases.length - 1 && (
              <Separator
                className='w-4/5 lg:w-px m-auto  lg:h-1/2 bg-secondary/55'
                orientation={separatorOrientation}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UseCases