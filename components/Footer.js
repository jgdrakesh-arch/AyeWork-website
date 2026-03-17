import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid four">
        <div>
          <Image src="/ayework-logo.png" alt="AyeWork logo" width={150} height={60} className="brand-mark" />
          <p style={{ color: '#94a3b8', lineHeight: 1.8, maxWidth: 320 }}>
            Volunteer management and engagement platform for schools, students, and community organizations.
          </p>
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700 }}>Navigation</div>
          <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
            <Link href="/about">About</Link>
            <Link href="/how">How It Works</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700 }}>Solutions</div>
          <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
            <Link href="/schools">Schools</Link>
            <Link href="/organizations">Organizations</Link>
            <Link href="/students">Students</Link>
          </div>
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700 }}>Contact</div>
          <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
            <div>contact@ayework.ca</div>
            <div>Windsor, Ontario</div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 AyeWork. All rights reserved.</div>
    </footer>
  );
}
