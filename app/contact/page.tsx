'use client';

import { useEffect } from 'react';
import { Mail, Briefcase, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
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
              Initiate{' '}
              <span className="typewriter-wrapper" style={{ display: 'inline-block' }}>
                <span
                  className="highlight"
                  id="typed-text"
                  data-phrases='["Initiate Project.", "Start Your Journey.", "Scale With Data.", "Build With Us."]'
                >
                  Project.
                </span>
              </span>
              <span className="typed-cursor"></span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-subtitle">
              Connect with our senior engineering office for high-stakes enterprise data
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="contact-grid">
          <div className="contact-info reveal reveal-delay-1">
            <h2 style={{ marginBottom: '2.5rem' }}>Corporate Access</h2>
            <div className="page-contact-info">
              <div style={{ marginBottom: '2.5rem' }}>
                <Mail />
                <a href="mailto:ajayshingadiya822@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  ajayshingadiya822@gmail.com
                </a>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <Phone /> <span>+91 9313564576</span>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <MapPin />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          <div className="form-card reveal reveal-delay-2">
            <form action="https://formsubmit.co/ajayshingadiya822@gmail.com" method="POST" id="contact-form">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Project Brief - Ajay Shingadiya" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              {/* Redirecting to success next app path */}
              <input type="hidden" name="_next" value="https://ajayshingadiya.vercel.app/success" />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Required Expertise</label>
                <select id="service" name="expertise">
                  <option>Data Extraction (Enterprise Scale)</option>
                  <option>Process Automation (Python/Cloud)</option>
                  <option>Chemical Structural Data</option>
                  <option>Strategic Partnership Query</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Brief</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe the scale and complexity of your challenge..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Case Brief
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
