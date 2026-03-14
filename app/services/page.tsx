'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, RefreshCw, Database } from 'lucide-react';

export default function ServicesPage() {
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
              Technical{' '}
              <span
                className="highlight"
                id="typed-text"
                data-phrases='["Architectures.", "Web Scraping.", "Excel Automation.", "Python Engineering.", "Process Automation."]'
              >
                Architectures.
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-subtitle">
              We build the digital infrastructure that powers data-driven decision
              making.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="container" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
        <div className="grid-bento">
          <div className="bento-item bento-span-12 reveal" id="web-scraping">
            <h2>01. Advanced Web Extraction</h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                fontSize: '1.1rem',
                maxWidth: '900px',
              }}
            >
              Our extraction pipelines are designed to bypass the most sophisticated
              anti-bot protections, including Cloudflare, Akamai, and Datadome. We use
              headless browser clusters (Playwright/Puppeteer) combined with
              high-performance Rust and Python backends.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '3rem',
              }}
            >
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>
                  <ShieldCheck style={{ color: 'var(--accent)', marginRight: '8px', verticalAlign: 'middle' }} />
                  Stealth
                </h4>
                <p style={{ fontSize: '0.85rem' }}>
                  Canvas fingerprinting and TLS-fingerprint rotation.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>
                  <RefreshCw style={{ color: 'var(--accent)', marginRight: '8px', verticalAlign: 'middle' }} />
                  Real-time
                </h4>
                <p style={{ fontSize: '0.85rem' }}>
                  Webhook integrations for instant data delivery.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>
                  <Database style={{ color: 'var(--accent)', marginRight: '8px', verticalAlign: 'middle' }} />
                  Delivery
                </h4>
                <p style={{ fontSize: '0.85rem' }}>
                  JSON, SQL, CSV, or direct API push.
                </p>
              </div>
            </div>
          </div>

          <div className="bento-item bento-span-6 reveal reveal-delay-1" id="python-automation">
            <h3>02. Process Automation</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Redesigning legacy manual workflows into high-speed digital processes. We
              specialize in Python-based cloud functions and custom local agents.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check style={{ color: 'var(--accent)', width: '18px', height: '18px' }} /> Cloud Orchestration (AWS/GCP)
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check style={{ color: 'var(--accent)', width: '18px', height: '18px' }} /> API Bridge Development
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check style={{ color: 'var(--accent)', width: '18px', height: '18px' }} /> Automated Reporting Systems
              </li>
            </ul>
          </div>

          <div
            className="bento-item bento-span-6 reveal reveal-delay-2"
            id="excel-automation"
            style={{ background: 'var(--bg-subtle)' }}
          >
            <h3>03. Excel &amp; VBA Mastery</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Transforming complex spreadsheets into robust applications. Ideal for
              corporate environments requiring local, secure data handling.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check style={{ color: 'var(--accent)', width: '18px', height: '18px' }} /> Complex Macro Engineering
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check style={{ color: 'var(--accent)', width: '18px', height: '18px' }} /> Dashboard Dynamic Logic
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check style={{ color: 'var(--accent)', width: '18px', height: '18px' }} /> Legacy System Interfacing
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it Scales */}
      <section className="container" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div
          className="card"
          style={{
            background: 'linear-gradient(135deg, var(--bg-surface), var(--bg-subtle))',
            padding: '4rem',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Ready for Massive Scale?</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
            }}
          >
            For projects requiring hundreds of thousands of rows daily or massive
            human-verified data entry, we leverage our{' '}
            <strong>Strategic Partnership Network</strong> to provide unlimited
            workforce and compute capacity.
          </p>
          <Link href="/strategic-partners" className="btn btn-primary">
            Discover Our Partnerships
          </Link>
        </div>
      </section>
    </>
  );
}
