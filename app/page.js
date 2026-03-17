import Link from 'next/link';
import PageShell from '@/components/PageShell';
import SectionHeader from '@/components/SectionHeader';
import { audienceData, features, processSteps } from '@/components/siteData';

export default function HomePage() {
  const stats = [
    { label: 'Paperless tracking', value: '100%' },
    { label: 'Stakeholder views', value: '3' },
    { label: 'Live visibility', value: 'Real-time' },
    { label: 'Workflow', value: 'End-to-end' },
  ];

  return (
    <PageShell>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="badge">Built for schools, students, and community organizations</div>
            <h1>Modern Volunteer Management for Today’s Schools and Communities</h1>
            <p className="lead">
              AyeWork replaces paper-based volunteer administration with smarter matching, digital hour tracking, real-time verification, and better visibility for every stakeholder.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Book a Demo</Link>
              <Link href="/about" className="btn btn-secondary">Learn More</Link>
            </div>
            <p className="hero-trust">
              Designed to reduce administrative burden, improve engagement, and modernize volunteer-hour workflows.
            </p>
            <div className="trust-grid">
              {['Cleaner experience for students', 'Better oversight for schools', 'Faster coordination for organizations'].map((item) => (
                <div key={item} className="trust-card">{item}</div>
              ))}
            </div>
          </div>
          <div className="dashboard-shell">
            <div className="dashboard-card">
              <div className="dashboard-inner">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '.92rem' }}>AyeWork Dashboard</div>
                    <div style={{ fontSize: '1.7rem', fontWeight: 700, marginTop: 4 }}>Volunteer Overview</div>
                  </div>
                  <div className="pill orange" style={{ background: 'rgba(241,90,41,.14)', color: '#fdba74' }}>Live</div>
                </div>
                <div className="dashboard-stats">
                  {stats.map((stat) => (
                    <div key={stat.label} className="dashboard-stat">
                      <div style={{ fontSize: '1.7rem', fontWeight: 700 }}>{stat.value}</div>
                      <div style={{ color: '#94a3b8', fontSize: '.9rem', marginTop: 6 }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="dashboard-sublist">
                  <div style={{ color: '#94a3b8', fontSize: '.92rem', marginBottom: 8 }}>Recent activity</div>
                  <div className="dashboard-item"><span>Volunteer hours submitted</span><span style={{ color: '#86efac' }}>Pending verification</span></div>
                  <div className="dashboard-item"><span>New opportunity posted</span><span style={{ color: '#fdba74' }}>Community partner</span></div>
                  <div className="dashboard-item"><span>Student milestone reached</span><span style={{ color: '#fcd34d' }}>40 hours</span></div>
                </div>
              </div>
            </div>
            <div className="floating-card floating-left"><div style={{ color:'#64748b', fontSize:'.8rem' }}>Built for</div><div style={{ marginTop:4, fontWeight:700 }}>Schools and communities</div></div>
            <div className="floating-card floating-right"><div style={{ color:'#64748b', fontSize:'.8rem' }}>Workflow</div><div style={{ marginTop:4, fontWeight:700 }}>Post → track → verify</div></div>
          </div>
        </div>
      </section>

      <section className="proof-strip"><div className="container proof-grid">{['Founded in Ontario', 'Built for schools & communities', 'Digital volunteer tracking', 'Smart profile matching', 'Verification workflows'].map((item)=><div key={item} className="proof-item">{item}</div>)}</div></section>

      <section className="section">
        <div className="container section-grid two">
          <div>
            <SectionHeader eyebrow="The challenge" title="Volunteer management should not still depend on paper, email chains, and manual verification." body="Many volunteer programs still struggle with fragmented communication, inconsistent tracking, limited visibility into student progress, and avoidable administrative work." />
          </div>
          <div className="card-grid two">
            {['Manual forms and spreadsheets', 'Limited visibility into student hours', 'Slow verification processes', 'Administrative burden on staff', 'Inaccurate milestone planning', 'Fragmented coordination'].map((item) => (
              <div key={item} className="info-card"><div className="icon-block" style={{ background:'#fff1f2' }} /><div style={{ marginTop:16, fontWeight:700 }}>{item}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:'#fff' }}>
        <div className="container section-grid two">
          <div className="feature-card" style={{ background:'linear-gradient(135deg,#fff7ed 0%,#eff6ff 100%)' }}>
            <div className="card-grid two">
              {['Opportunity discovery', 'Profile-based matching', 'Digital hour logs', 'Organization verification'].map((item) => (
                <div key={item} className="surface-card"><div style={{ color:'#64748b', fontSize:'.9rem' }}>AyeWork capability</div><div style={{ marginTop:8, fontWeight:700, fontSize:'1.1rem' }}>{item}</div></div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="The solution" title="A smarter digital platform for student volunteering and community engagement." body="AyeWork creates one connected workflow from opportunity posting to participation, hour tracking, verification, and reporting." />
            <div className="bullet-list">
              {features.slice(0,4).map((feature) => (
                <div key={feature.title} className="surface-card bullet-item"><span className="dot blue" /><div><strong>{feature.title}</strong> — {feature.desc}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeader eyebrow="How it works" title="Simple for every stakeholder." dark />
          <div className="card-grid three" style={{ marginTop: 40 }}>
            {processSteps.map((step, index) => (
              <div key={step} className="feature-card" style={{ background:'rgba(255,255,255,.05)', borderColor:'rgba(255,255,255,.09)', color:'#fff', boxShadow:'none' }}>
                <div style={{ color:'#fdba74', fontSize:'.9rem' }}>Step {index + 1}</div>
                <div style={{ marginTop: 12, fontWeight:700, fontSize:'1.1rem', lineHeight:1.6 }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Who it serves" title="Tailored value for schools, community organizations, and students." />
          <div className="card-grid three" style={{ marginTop: 40 }}>
            {Object.entries(audienceData).map(([key, card]) => (
              <div key={key} className="audience-card">
                <div className="icon-block" />
                <h3 style={{ fontSize:'1.7rem' }}>{key === 'schools' ? 'For Schools' : key === 'organizations' ? 'For Organizations' : 'For Students'}</h3>
                <p className="section-intro" style={{ marginTop: 12 }}>{card.intro}</p>
                <div className="bullet-list">
                  {card.bullets.slice(0,3).map((bullet)=><div key={bullet} className="bullet-item"><span className="dot orange" /><div>{bullet}</div></div>)}
                </div>
                <div style={{ marginTop: 24 }}><Link href={`/${key}`} className="btn btn-secondary">Learn more</Link></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <SectionHeader eyebrow="Platform features" title="Modern product design with practical administrative value." />
          <div className="card-grid three" style={{ marginTop: 40 }}>
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="icon-block" style={{ background:'#fff', boxShadow:'0 8px 18px rgba(15,23,42,.06)' }} />
                <div style={{ marginTop: 18, fontWeight: 700, fontSize:'1.2rem' }}>{feature.title}</div>
                <p className="section-intro" style={{ marginTop: 10 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-grid two">
          <div>
            <SectionHeader eyebrow="Impact" title="Built to improve efficiency, visibility, and engagement." body="AyeWork helps replace administrative friction with a more connected, trackable, and scalable volunteer ecosystem." />
          </div>
          <div className="card-grid two">
            {['Less paperwork', 'Better student participation visibility', 'Faster verification', 'Stronger school-community coordination'].map((item) => (
              <div key={item} className="info-card"><div style={{ fontWeight:700, fontSize:'1.2rem' }}>{item}</div><p className="section-intro" style={{ marginTop: 10 }}>Replace outdated manual processes with a cleaner digital workflow designed for modern volunteer engagement.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <h2 style={{ margin:0, color:'#fff' }}>Ready to modernize student volunteer management?</h2>
            <p style={{ color:'rgba(255,255,255,.92)', fontSize:'1.08rem', lineHeight:1.8, maxWidth:760 }}>See how AyeWork can help your school or organization simplify tracking, improve engagement, and reduce administrative workload.</p>
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-secondary">Book a Demo</Link>
            <Link href="/about" className="btn btn-ghost-dark">Learn More</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
