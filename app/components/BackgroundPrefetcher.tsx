'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ROUTES_TO_PREFETCH = [
  '/services',
  '/strategic-partners',
  '/chemical-data',
  '/profile',
  '/about',
  '/contact'
];

export default function BackgroundPrefetcher() {
  const router = useRouter();

  useEffect(() => {
    let isCancelled = false;

    const prefetchSequentially = async () => {
      // Wait 3 seconds to let the initial page finish fully loading
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      for (const route of ROUTES_TO_PREFETCH) {
        if (isCancelled) break;
        
        try {
          // Instructs Next.js to quietly load this route into the client cache
          router.prefetch(route);
          
          // Wait 800ms before fetching the next one so we don't clog the network
          await new Promise(resolve => setTimeout(resolve, 800));
        } catch (error) {
          console.warn(`Failed to prefetch ${route}:`, error);
        }
      }
    };

    // Use requestIdleCallback so it only runs when the browser has free resources
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        prefetchSequentially();
      });
    } else {
      // Fallback for older Safari browsers
      setTimeout(prefetchSequentially, 2000);
    }

    return () => {
      isCancelled = true;
    };
  }, [router]);

  return null; // This component has no UI
}
