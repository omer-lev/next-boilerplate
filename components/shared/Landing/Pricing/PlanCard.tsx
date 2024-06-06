import React from 'react';
import Header from '../../Header';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PlanCardProps {
  title: string;
  price: number;
  description: string;
  features: any;
  isYearly: boolean;
}

const PlanCard = ({ title, price, description, features, isYearly }: PlanCardProps) => {
  return (
    <div className='w-[375px] h-[550px] bg-gradient-to-tl from-accent to-muted rounded-lg p-[2px] shadow-2xl'>
      <div className='w-full h-full bg-primary rounded-lg p-7 relative'>
        <h2 className='text-accent text-xl text-center font-medium pb-1'>
          {title}
        </h2>

        <h3 className='text-center text-lg font-light text-muted'>
          ${isYearly ? (price * 10).toFixed(2) : price}
        </h3>

        <p className='text-center text-xs text-muted/70'>
          {isYearly ? 'per year' : 'per month'}
        </p>

        <div className='flex flex-col items-start gap-3 mt-10'>
          {features.map((feature: { title: string, included: boolean }, index: number) => (
            <p key={index} className='text-center text-base text-muted py-1 flex items-center gap-2'>
              {feature.included ? <Check size={18} className='text-green-400' /> : <X size={18} className='text-red-400' />}
              {feature.title}
            </p>
          ))}
        </div>

        <Button className='text-base bg-gradient-to-r from-accent to-muted hover:opacity-90 text-primary font-semibold p-6 absolute bottom-7 left-1/2 translate-x-[-50%] hover:bg-muted hover:text-secondary'>
          <Link href='/'>
            Get Started!
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default PlanCard