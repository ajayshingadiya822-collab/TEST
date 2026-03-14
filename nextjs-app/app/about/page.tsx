'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
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
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-head">
            <h1 className="hero-title">
              Operational{' '}
              <span
                className="highlight"
                id="typed-text"
                data-phrases='["About Ajay.", "The Engineer.", "Data Architect.", "My Story."]'
              >
                Excellence.
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-subtitle">
              Engineering the clean, resilient pipelines that deliver strategic
              intelligence for modern industries.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid-bento">
          <div className="bento-item bento-span-8">
            <h2 style={{ marginBottom: '2rem' }}>Our Engineering Philosophy</h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              We believe that data is the foundational currency of the century, but it
              is raw and chaotic. Our role is to build the "Clean Pipes"—the digital
              infrastructure that extracts, validates, and delivers this value with
              99.9% uptime.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              For over a decade, we've focused on one thing: Scale. Every project we
              touch, from individual scrapers to enterprise data warehouses, is
              designed to survive structural shifts in the digital landscape.
            </p>
          </div>

          <div
            className="bento-item bento-span-4"
            style={{ background: 'var(--bg-surface)', textAlign: 'center' }}
          >
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}
            >
              12+
            </div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
              }}
            >
              Years Expertise
            </p>
            <hr
              style={{
                margin: '2rem 0',
                border: 'none',
                borderTop: '1px solid var(--border)',
              }}
            />
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}
            >
              1B+
            </div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
              }}
            >
              Rows Processed
            </p>
          </div>

          <div className="bento-item bento-span-4" style={{ background: 'var(--bg-subtle)' }}>
            <h4>Global Impact</h4>
            <p style={{ fontSize: '0.85rem' }}>
              Serving enterprise clients across NA, EU, and Asia with specialized
              domain knowledge.
            </p>
          </div>
          <div className="bento-item bento-span-4" style={{ background: 'var(--bg-subtle)' }}>
            <h4>Security First</h4>
            <p style={{ fontSize: '0.85rem' }}>
              SOC2-compliant development patterns and decentralized architecture.
            </p>
          </div>
          <div className="bento-item bento-span-4" style={{ background: 'var(--bg-subtle)' }}>
            <h4>Partner Scalability</h4>
            <p style={{ fontSize: '0.85rem' }}>
              Leveraging top-tier strategic partners for unlimited compute and
              workforce capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '10rem' }}>
        <div className="card" style={{ textAlign: 'center', border: '2px dashed var(--border)' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>The Future of Data Ops</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            We are shifting toward AI-assisted structural recognition to ensure that
            even the most dynamic web environments don't break our delivery
            pipelines.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Join Our Innovation Path
          </Link>
        </div>
      </section>
    </>
  );
}
