'use client';
// Vercel build trigger

import { useEffect } from 'react';
import Link from 'next/link';
import {
  Zap,
  ArrowRight,
  Database,
  FlaskConical,
  Table2,
  ArrowUpRight,
  Cpu,
} from 'lucide-react';

export default function Home() {
  // Wait before animating numbers via JS (since CSS covers the fadeSlideDown)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const countTo = parseInt(el.getAttribute('data-count') || '0', 10);
            const suffix = el.getAttribute('data-suffix') || '';

            // simple counter animation
            let current = 0;
            const step = Math.ceil(countTo / 20);
            const timer = setInterval(() => {
              current += step;
              if (current >= countTo) {
                current = countTo;
                clearInterval(timer);
              }
              el.innerText = current + suffix;
            }, 50);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.stat-number, .number').forEach((num) => {
      observer.observe(num);
    });

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
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        <div className="container">
          {/* Title at TOP */}
          <div className="hero-head">
            <div className="hero-badge">
              <span className="pulse"></span>
              Available for Enterprise Projects
            </div>
            <h1 className="hero-title">
              Engineered for{' '}
              <span
                className="highlight"
                id="typed-text"
                data-phrases='["Massive Data Extraction.", "Intelligent Automation.", "Digital Infrastructure.", "Enterprise Scale.", "Process Engineering."]'
              >
                Massive Data Extraction.
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>

          {/* Subtitle + CTA + Stats BELOW */}
          <div className="hero-body">
            <p className="hero-subtitle">
              We architect high-performance data systems that eliminate manual overhead
              and unlock hidden value in your technical infrastructure — at
              enterprise scale.
            </p>

            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary">
                Start a Project <Zap />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View Services <ArrowRight />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number" data-count="100" data-suffix="K+">
                  0
                </span>
                <span className="stat-label">Records Processed Daily</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="50" data-suffix="+">
                  0
                </span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="5" data-suffix="★">
                  0
                </span>
                <span className="stat-label">Client Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="3" data-suffix=" Yrs">
                  0
                </span>
                <span className="stat-label">Enterprise Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO SERVICES ──────────────────────────────── */}
      <section className="container" style={{ paddingTop: 0 }}>
        <div className="grid-bento">
          <div className="bento-item bento-span-8">
            <div className="card-icon">
              <Database />
            </div>
            <h3>Massive Data Extraction</h3>
            <p>
              Resilient, distributed crawling systems handling millions of data points
              across protected web environments. Built with self-healing logic and
              anti-fingerprinting technology for zero downtime.
            </p>
            <Link href="/services#web-scraping" className="card-link">
              Explore Pipelines
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>

          <div
            className="bento-item bento-span-4"
            style={{ background: 'var(--accent-subtle)' }}
          >
            <div className="card-icon">
              <FlaskConical />
            </div>
            <h3>Chemical Intelligence</h3>
            <p>
              Specialized structural data management for Pharma and Chemical industries
              at supplier scale.
            </p>
            <Link
              href="/chemical-data"
              className="btn btn-outline"
              style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
            >
              Deep Dive
            </Link>
          </div>

          <div className="bento-item bento-span-4">
            <div className="card-icon">
              <Zap />
            </div>
            <h3>Technical Automation</h3>
            <p>
              Workflow redesign through Python and cloud orchestration — transforming
              manual processes into autonomous agents.
            </p>
            <Link href="/services#python-automation" className="card-link">
              Learn More
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>

          <div className="bento-item bento-span-4">
            <div className="card-icon">
              <Table2 />
            </div>
            <h3>Excel Automation</h3>
            <p>
              Complex spreadsheet automation with macro engineering and real-time Power
              BI dashboard integration.
            </p>
            <Link href="/services#excel-automation" className="card-link">
              Learn More
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>

          <div className="bento-item bento-span-12 bento-accent">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                  Enterprise Ready?
                </h3>
                <p style={{ maxWidth: '560px' }}>
                  Our strategic partnerships with top-tier data and IT firms allow us
                  to handle requests from single-tool automations to million-row data
                  migrations.
                </p>
              </div>
              <Link
                href="/strategic-partners"
                className="btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Our Network <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ─────────────────────────────────── */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-stat">
              <span className="number" data-count="100" data-suffix="K+">
                0
              </span>
              <span className="label">Records / Day</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-stat">
              <span className="number" data-count="99" data-suffix="%">
                0
              </span>
              <span className="label">Data Accuracy</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-stat">
              <span className="number" data-count="50" data-suffix="+">
                0
              </span>
              <span className="label">Projects Done</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-stat">
              <span className="number" data-count="24" data-suffix="hr">
                0
              </span>
              <span className="label">Avg. Response</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-stat">
              <span className="number" data-count="10" data-suffix="+">
                0
              </span>
              <span className="label">Industries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING PROCESS ─────────────────────────── */}
      <section className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">
            <Cpu style={{ width: '14px', height: '14px' }} /> How It Works
          </span>
          <h2 className="section-title">The Engineering Process</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 3.5rem' }}>
            A proven 3-phase framework that takes your data challenge from ambiguity to
            production in record time.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <h3>Auditing &amp; Spec</h3>
            <p>
              Deep-dive audit of your current data silos and manual workflows to
              identify critical bottlenecks and define precise engineering requirements.
            </p>
          </div>
          <div className="process-step">
            <h3>Architecture Design</h3>
            <p>
              Custom, scalable blueprint using high-performance stacks — async Python,
              cloud orchestration, or Rust — tailored to your exact throughput demands.
            </p>
          </div>
          <div className="process-step">
            <h3>Deployment &amp; QA</h3>
            <p>
              Sub-millisecond latency monitoring and automated QA cycles ensure
              flawless data flowing into your business — 24/7 reliability guaranteed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
