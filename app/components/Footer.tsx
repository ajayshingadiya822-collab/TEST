import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter, Send } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* CTA Strip (Moved out of footer) */}
      <section className="cta-band">
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--text-primary)'}}>Ready to scale your data operations?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Let's discuss your project. Response within 24 hours.</p>
        <Link href="/contact" className="btn btn-primary">
          Start a Conversation <Send style={{ width: '18px', height: '18px' }}/>
        </Link>
      </section>

      <footer className="footer">
        {/* Main Footer */}
        <div className="footer-inner">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Ajay Shingadiya</h3>
              <p>
                Enterprise-grade data engineering &amp; automation. Precision. Speed. Scale.
                Built for the demands of modern business.
              </p>
              <div className="footer-badge">
                <span className="dot"></span>
                Available for Projects
              </div>
            </div>

            <div className="footer-links">
              <h4>Practice Areas</h4>
              <ul>
                <li><Link href="/services#web-scraping">Web Scraping</Link></li>
                <li><Link href="/services#excel-automation">Excel Automation</Link></li>
                <li><Link href="/chemical-data">Chemical Data</Link></li>
                <li><Link href="/services#python-automation">Python Engineering</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/strategic-partners">Partnership</Link></li>
                <li><Link href="/profile">Who I Am</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div>
                <Mail />
                <span>ajayshingadiya822@gmail.com</span>
              </div>
              <div>
                <Phone />
                <span>+91 9313564576</span>
              </div>
              <div>
                <MapPin />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Ajay Shingadiya. Built for Performance.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Phone"><Phone /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
