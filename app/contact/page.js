import PageShell from '@/components/PageShell';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const notes = [
    'Single-submit protection to stop accidental repeat sends',
    'Clear sending, success, and error states for each request',
    'Required-field validation before submission',
    'Timeout-safe form handling for a more reliable experience',
    'Structure ready for email, CRM, or webhook integration',
  ];

  return (
    <PageShell>
      <section className="section" style={{ background:'#fff' }}>
        <div className="container section-grid two">
          <div>
            <SectionHeader
              eyebrow="Contact and demo request"
              title="Request a demo without duplicate messages or failed submissions."
              body="The new contact flow is designed to prevent repeated submissions, provide clear delivery feedback, and give users confidence that their request has been received."
            />
            <div className="bullet-list" style={{ marginTop: 28 }}>
              {notes.map((item) => (
                <div key={item} className="surface-card bullet-item"><span className="dot orange" /><div>{item}</div></div>
              ))}
            </div>
          </div>
          <div className="form-card">
            <div>
              <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Book a Demo</h3>
              <p className="section-intro" style={{ marginTop: 8 }}>
                A clean, modern inquiry form built to reduce message timeouts and eliminate duplicate submissions.
              </p>
            </div>
            <div style={{ marginTop: 22 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
