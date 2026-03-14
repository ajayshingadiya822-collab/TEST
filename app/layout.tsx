import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import BackgroundPrefetcher from './components/BackgroundPrefetcher';

export const metadata: Metadata = {
  title: 'Ajay Shingadiya | Enterprise Data Engineering & Automation',
  description: 'Ajay Shingadiya — Senior Data Engineer & Automation Specialist. Enterprise-grade data extraction, automation, and chemical intelligence from Ahmedabad, India.',
  openGraph: {
    title: 'Ajay Shingadiya | Enterprise Data Engineering',
    description: 'Mission-critical data pipelines and workflow automation for modern enterprises.',
    url: 'https://ajayshingadiya.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Ajay Shingadiya Data Engineering',
              url: 'https://ajayshingadiya.vercel.app',
              telephone: '+91 9313564576',
              email: 'ajayshingadiya822@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body>
        <NextTopLoader
          color="var(--accent)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px var(--accent),0 0 5px var(--accent)"
        />
        <ParticleCanvas />
        <BackgroundPrefetcher />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
