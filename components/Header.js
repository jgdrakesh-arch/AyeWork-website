'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from './siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setMobileOpen(false)}>
          <Image src="/ayework-logo.png" alt="AyeWork logo" width={140} height={56} className="brand-mark" priority />
          <div>
            <div className="brand-title">AyeWork</div>
            <div className="brand-subtitle">Volunteer Management & Engagement</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Main">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="pill orange">Ontario-made platform</div>
          <Link href="/contact" className="btn btn-primary">Book a Demo</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {mobileOpen ? (
        <div className="container mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Book a Demo
          </Link>
        </div>
      ) : null}
    </header>
  );
}
