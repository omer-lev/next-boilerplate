import { cn } from '@/lib/utils';
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  titleProps?: string;
  subtitleProps?: string;
}

const Header = ({ title, subtitle, titleProps='text-primary', subtitleProps='text-muted' }: HeaderProps) => {
  return (
    <div className='text-center mb-14'>
      <h1 className={cn(titleProps, 'text-2xl xl:text-3xl font-semibold')}>
        {title}
      </h1>

      <p className={cn(subtitleProps)}>
        {subtitle}
      </p>
    </div>
  )
}

export default Header