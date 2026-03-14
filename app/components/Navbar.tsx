'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Sun, Moon,
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/strategic-partners', label: 'Partnership' },
  { href: '/chemical-data', label: 'Chemical Data' },
  { href: '/profile', label: 'Who I Am' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  /* ── Init theme from localStorage ── */
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  /* ── Sticky header on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close menu on outside click ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-container')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  /* ── Close menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ── Toggle theme ── */
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  /* ── Active link check ── */
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav-container container">
        <div className="logo">
          <Link href="/">Ajay Shingadiya</Link>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={isActive(href) ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" aria-label="Toggle Theme" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </nav>
    </header>
  );
}
