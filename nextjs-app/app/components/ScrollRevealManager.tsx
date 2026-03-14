'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1) Find all target elements that haven't been processed
    const revealEls = document.querySelectorAll(
      '.bento-item:not(.reveal), .process-step:not(.reveal), .section-title:not(.reveal), .section-label:not(.reveal), .section-subtitle:not(.reveal), .trust-stat:not(.reveal)'
    );

    // 2) Add initial classes
    revealEls.forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 4 === 1) el.classList.add('reveal-delay-1');
      if (i % 4 === 2) el.classList.add('reveal-delay-2');
      if (i % 4 === 3) el.classList.add('reveal-delay-3');
    });

    // 3) Setup observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    // 4) Observe them
    revealEls.forEach((el) => revealObserver.observe(el));

    // Cleanup observer
    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
