'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function ProfilePage() {
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
        <div className="container">
          <div className="hero-head">
            <h1 className="hero-title">
              Core{' '}
              <span className="typewriter-wrapper" style={{ display: 'inline-block' }}>
                <span
                  className="highlight"
                  id="typed-text"
                  data-phrases='["Data Engineer.", "Automation Expert.", "Python Specialist.", "Ajay Shingadiya."]'
                >
                  Architect.
                </span>
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-subtitle">
              Senior Software Architect specializing in high-frequency data extraction
              and intelligent workflow automation.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="profile-grid">
          <aside className="profile-card">
            <div
              style={{
                width: '200px',
                height: '200px',
                background: 'var(--bg-subtle)',
                borderRadius: '50%',
                margin: '0 auto 2rem',
                border: '4px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShieldCheck
                style={{
                  width: '80px',
                  height: '80px',
                  color: 'var(--accent)',
                  opacity: 0.2,
                }}
              />
            </div>
            <h2 style={{ marginBottom: '0.5rem' }}>Ajay Shingadiya</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Senior Automation Architect
            </p>

            <div
              className="page-contact-info"
              style={{
                textAlign: 'left',
                padding: '1.5rem 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div>
                <Mail />
                <span>ajayshingadiya822@gmail.com</span>
              </div>
              <div>
                <MapPin /> <span>Gujarat, India</span>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Hire for Enterprise
            </Link>
          </aside>

          <div className="profile-bio">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              Professional Excellence
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.8,
              }}
            >
              With over 12 years of experience in the data space, I've seen the
              evolution of web architecture from simple HTML5 blocks to the complex,
              JavaScript-heavy dynamic ecosystems of today. My specialty lies in the
              "Shadow Infrastructure"—the behind-the-scenes systems that power the
              world's most data-reliant companies.
            </p>

            <h3 style={{ margin: '3rem 0 1.5rem' }}>The Engineering Stack</h3>
            <div className="stack-grid">
              <span className="stack-tag highlight" style={{ borderColor: 'var(--accent)' }}>Rust (Compute Optim.) 🦀</span>
              <span className="stack-tag highlight" style={{ borderColor: 'var(--accent)' }}>Asynchronous Python 🐍</span>
              <span className="stack-tag">Playwright / Selenium</span>
              <span className="stack-tag">Docker &amp; Kubernetes</span>
              <span className="stack-tag">PostgreSQL &amp; Redis</span>
              <span className="stack-tag">AWS Lambda / S3</span>
              <span className="stack-tag">CI/CD (GitHub Actions)</span>
              <span className="stack-tag">API Gateway Mgmt</span>
              <span className="stack-tag">Machine Learning (Classification)</span>
            </div>

            <h3 style={{ margin: '3rem 0 1.5rem' }}>Strategic Advantage</h3>
            <div className="grid-bento">
              <div
                className="bento-item bento-span-12"
                style={{ background: 'var(--bg-subtle)' }}
              >
                <h4>Direct Communication</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  You work directly with the architect. No middle-management, no
                  communication decay. Every architectural decision is explained and
                  justified.
                </p>
              </div>
              <div
                className="bento-item bento-span-12"
                style={{ background: 'var(--bg-subtle)' }}
              >
                <h4>Scalability by Design</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Our systems are built to handle structural shifts and load spikes
                  automatically. We don't build "fixes"—we build "solutions" that
                  last for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
