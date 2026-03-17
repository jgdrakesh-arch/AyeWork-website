import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

export default function AudienceTemplate({ data }) {
  return (
    <section className="container-shell px-6 py-20">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} body={data.intro} />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">Key value</h3>
          <div className="mt-6 space-y-4">
            {data.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#F15A29]" />
                <p className="text-slate-700">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-orange-50 to-blue-50 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">Next step</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Request a demo to explore how AyeWork can support your workflow, improve visibility, and reduce administrative friction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-2xl bg-[#1B75BB] px-5 py-3 text-sm font-medium text-white">
              Book a Demo
            </Link>
            <Link href="/" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
