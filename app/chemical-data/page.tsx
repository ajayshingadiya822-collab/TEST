'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Check, Beaker } from 'lucide-react';

export default function ChemicalDataPage() {
  // Common Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
        <div className="container reveal">
          <div className="hero-head">
            <h1 className="hero-title">
              Engineered for{' '}
              <span
                className="highlight"
                id="typed-text"
                data-phrases='["Chemical Intelligence.", "Structural Data.", "Pharma Expertise.", "Molecular Data."]'
              >
                Chemical Intelligence.
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-subtitle">
              Specialized structural data harvesting and database management for global
              pharmaceutical chemical leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
        <div className="grid-bento">
          <div className="bento-item bento-span-8 reveal">
            <h3>Catalog Automation</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Maintaining massive chemical databases with 100% precision in
              structural identifiers. We handle millions of compound entries with
              automated validation cycles.
            </p>
            <ul style={{ listStyle: 'none' }}>
              <li
                style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Check style={{ color: 'var(--accent)', width: '18px' }} />
                Compound Extraction &amp; Crawling
              </li>
              <li
                style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Check style={{ color: 'var(--accent)', width: '18px' }} />
                SDS &amp; Technical Meta-Data
              </li>
              <li
                style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Check style={{ color: 'var(--accent)', width: '18px' }} />
                Periodic Inventory Sync
              </li>
            </ul>
          </div>

          <div
            className="bento-item bento-span-4 reveal reveal-delay-1"
            style={{ background: 'var(--bg-subtle)' }}
          >
            <div className="card-icon">
              <Beaker />
            </div>
            <h3>SMILES &amp; InChI</h3>
            <p style={{ fontSize: '0.85rem' }}>
              Validating CAS numbers and chemical structures across multiple global
              sources.
            </p>
          </div>

          <div className="bento-item bento-span-4 reveal reveal-delay-1">
            <h3>Price Intel</h3>
            <p style={{ fontSize: '0.85rem' }}>
              Real-time tracking of compound pricing and availability trends.
            </p>
          </div>

          <div
            className="bento-item bento-span-8 reveal reveal-delay-2"
            style={{ background: 'var(--bg-surface)' }}
          >
            <h3>Supplier-Scale Performance</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              I specialize in the high-volume, complex structural data challenges
              typical of market leaders. My pipelines handle over 100k+ active
              compounds with daily synchronization and metadata enrichment.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '2rem', paddingBottom: '8rem' }}>
        <div
          className="card reveal"
          style={{ textAlign: 'center', border: '1px solid var(--border)' }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Specific Domain Requirements?</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            We architect bespoke scrapers for specialized chemicals, rare earth
            markets, and emerging pharmaceutical catalogs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Connect with Specialist
          </Link>
        </div>
      </section>
    </>
  );
}
