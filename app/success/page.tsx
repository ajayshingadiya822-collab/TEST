'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  // Typing effect
  useEffect(() => {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const phrases = JSON.parse(el.getAttribute('data-phrases') || '[]');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        el.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 30 : 70;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }

      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container" style={{ minHeight: '80vh', display: 'flex' }}>
      <div className="success-container" style={{ margin: 'auto' }}>
        <div className="success-icon">
          <CheckCircle style={{ width: '48px', height: '48px' }} />
        </div>
        <h1 className="hero-title">
          Transmission{' '}
          <span
            className="highlight"
            id="typed-text"
            data-phrases='["Received.", "Logged.", "Confirmed.", "Success."]'
          >
            Received.
          </span>
          <span className="typed-cursor"></span>
        </h1>
        <p className="hero-subtitle">
          Thank you for reaching out. Your project brief has been logged into our
          system. Our senior office will review and respond within 24 business hours.
        </p>
        <div style={{ marginTop: '3rem' }}>
          <Link href="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
