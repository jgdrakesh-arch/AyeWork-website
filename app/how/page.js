import PageShell from '@/components/PageShell';
import SectionHeader from '@/components/SectionHeader';
import { processSteps } from '@/components/siteData';

export default function HowPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How it works"
            title="A clear end-to-end workflow from opportunity discovery to verified hours."
            body="The process is designed to create a smoother experience for students while improving visibility and control for schools and organizations."
          />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {processSteps.map((step, index) => (
              <div key={step} className="feature-card" style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 18, background: '#1B75BB', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700 }}>
                  {index + 1}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.7 }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
