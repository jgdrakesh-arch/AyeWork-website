import PageShell from '@/components/PageShell';
import SectionHeader from '@/components/SectionHeader';

export default function AboutPage() {
  const cards = [
    { title: 'Our mission', desc: 'To make volunteer engagement more accessible, efficient, and measurable through technology.' },
    { title: 'Our vision', desc: 'To build stronger school-community connections through a modern platform that simplifies participation and oversight.' },
    { title: 'Why it matters', desc: 'Volunteer programs should be easier to manage, easier to join, and easier to verify for every stakeholder involved.' },
  ];

  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="About AyeWork"
            title="A digital platform designed to modernize student volunteering and community engagement."
            body="AyeWork was created to address the inefficiencies of manual volunteer administration and provide a better experience for schools, students, and organizations."
          />
          <div className="card-grid three" style={{ marginTop: 40 }}>
            {cards.map((item) => (
              <div key={item.title} className="feature-card">
                <h3 style={{ marginTop: 0, fontSize: '1.6rem' }}>{item.title}</h3>
                <p className="section-intro" style={{ marginTop: 12 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
