import React from 'react';
import {Container} from '@/components/ui/Container';
import {cn} from '@/components/ui/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'gray' | 'dark' | 'none';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id,
  variant = 'white',
  spacing = 'md'
}) => {
  const variantClasses = {
    white: 'bg-brand-bg',
    gray: 'bg-brand-surface border-y border-brand-border',
    dark: 'bg-black text-text-primary',
    none: ''
  };

  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-20',
    lg: 'py-20 md:py-32',
    none: ''
  };

  return (
    <section 
      id={id} 
      className={cn(variantClasses[variant], spacingClasses[spacing], className)}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};
