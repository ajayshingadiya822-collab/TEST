'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1) Find all elements with the .reveal class
    const revealEls = document.querySelectorAll('.reveal');

    // 2) Setup observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // We can stop observing once it's visible if we want a one-time animation
            // revealObserver.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    // 3) Observe them
    revealEls.forEach((el) => {
      // If already visible (e.g. from a fast navigation), don't re-observe or just let it handle it
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
