'use client';

import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';

import { MotionProvider } from '@/components/motion-provider';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute='class'
      enableSystem
    >
      <MotionProvider>
        <TooltipProvider delayDuration={100}>
          {children}
          <Suspense>
            <Toaster />
          </Suspense>
        </TooltipProvider>
      </MotionProvider>
    </ThemeProvider>
  );
};
