export default function SectionHeader({ eyebrow, title, body, dark = false }) {
  return (
    <div style={{ maxWidth: 760 }}>
      <div className={`eyebrow ${dark ? 'dark' : ''}`}>{eyebrow}</div>
      <h2>{title}</h2>
      {body ? <p className="section-intro">{body}</p> : null}
    </div>
  );
}
