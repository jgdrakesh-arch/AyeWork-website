import Link from 'next/link';
import SectionHeader from './SectionHeader';

export default function AudiencePage({ eyebrow, title, intro, bullets }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} body={intro} />
        <div className="section-grid two" style={{ marginTop: 48 }}>
          <div className="feature-card">
            <h3 style={{ marginTop: 0, fontSize: '1.7rem' }}>Key value</h3>
            <div className="bullet-list">
              {bullets.map((bullet) => (
                <div key={bullet} className="bullet-item">
                  <span className="dot orange" />
                  <div style={{ color: '#334155' }}>{bullet}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-card" style={{ background: 'linear-gradient(135deg,#fff7ed 0%,#eff6ff 100%)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.7rem' }}>Next step</h3>
            <p className="section-intro" style={{ marginTop: 12 }}>
              Request a demo to explore how AyeWork can support your workflow, improve visibility, and reduce administrative friction.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Book a Demo</Link>
              <Link href="/" className="btn btn-secondary">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
