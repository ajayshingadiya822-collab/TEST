'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Code,
  Smartphone,
  Layout,
  Monitor,
  Layers,
  TrendingUp,
  Globe,
  Shield,
  Building2,
} from 'lucide-react';

export default function StrategicPartnersPage() {
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
              Strategic{' '}
              <span
                className="highlight"
                id="typed-text"
                data-phrases='["Strategic Partners.", "Global Network.", "Enterprise Alliance.", "Scale Together."]'
              >
                Scalability.
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-subtitle">
              For enterprise-scale requirements, we leverage specialized partnerships
              to deliver uncompromised quality and global coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 0 }}>
        <div className="grid-bento">
          {/* Data Entry Partner */}
          <div
            className="bento-item bento-span-12 reveal"
            style={{ borderLeft: '6px solid var(--accent)' }}
          >
            <span className="partner-badge">Data Processing Partner</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Enterprise Data Operations
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                maxWidth: '900px',
                fontSize: '1.1rem',
              }}
            >
              Our primary partner for large-volume data entry, normalization, and
              catalog management. Their specialized workforce ensures 99.9% accuracy
              for mission-critical datasets.
            </p>

            <div className="service-list-cols">
              <div className="service-item">
                <CheckCircle2 />
                <span>E-commerce Cataloging</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>Invoice Digitization</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>Legal Documentation</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>Data Normalization</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>OCR Post-Processing</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>Image Annotation</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>Legacy DB Migration</span>
              </div>
              <div className="service-item">
                <CheckCircle2 />
                <span>24/7 Operations</span>
              </div>
            </div>
          </div>

          {/* IT/Software Partner */}
          <div
            className="bento-item bento-span-12 reveal reveal-delay-2"
            style={{ borderLeft: '6px solid var(--accent)' }}
          >
            <span className="partner-badge">Software Engineering Partner</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Full-Stack Development &amp; IT
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                maxWidth: '900px',
                fontSize: '1.1rem',
              }}
            >
              For complex application builds and large-scale software infrastructure,
              our IT partner provides senior engineering talent across all modern
              technology stacks.
            </p>

            <div className="service-list-cols">
              <div className="service-item">
                <Code /> <span>Custom Software Builds</span>
              </div>
              <div className="service-item">
                <Smartphone />
                <span>Enterprise Mobile Apps</span>
              </div>
              <div className="service-item">
                <Layout /> <span>Web Infrastructure</span>
              </div>
              <div className="service-item">
                <Monitor /> <span>System Architecture</span>
              </div>
              <div className="service-item">
                <Layers /> <span>UI/UX Interface Design</span>
              </div>
              <div className="service-item">
                <TrendingUp /> <span>Digital Strategy</span>
              </div>
              <div className="service-item">
                <Globe /> <span>Cloud Engineering</span>
              </div>
              <div className="service-item">
                <Shield /> <span>Secure Backend Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '1rem' }}>
        <div
          className="bento-item reveal"
          style={{ textAlign: 'center', border: '1px dashed var(--border)' }}
        >
          <Building2
            style={{
              width: '48px',
              height: '48px',
              color: 'var(--accent)',
              marginBottom: '2rem',
              display: 'inline-block',
            }}
          />
          <h2 style={{ marginBottom: '1.5rem' }}>Unified Oversight</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            Whether your project is handled directly by our core team or through our
            strategic partners, I personally oversee the architecture and quality
            control to ensure executive standards.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start Enterprise Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
