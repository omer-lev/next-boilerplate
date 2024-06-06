import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const CaseCard = ({ title, description, icon }: CardProps) => {
  return (
    <div className='py-16 lg:px-12'>
      <h3 className='text-primary font-semibold text-lg pb-2'>
        {title}
      </h3>

      <p className='text-muted'>
        {description}
      </p>

      <Image 
        src={icon}
        alt='use case'
        width={150}
        height={150}
        className='mx-auto mt-8'
      />
    </div>
  )
}

export default CaseCard