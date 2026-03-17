import SectionHeader from '@/components/SectionHeader';
import { processSteps } from '@/components/site-data';

export const metadata = {
  title: 'How It Works | AyeWork',
};

export default function HowItWorksPage() {
  return (
    <section className="container-shell px-6 py-20">
      <SectionHeader
        eyebrow="How it works"
        title="A clear end-to-end workflow from opportunity discovery to verified hours."
        body="The process is designed to create a smoother experience for students while improving visibility and control for schools and organizations."
      />
      <div className="mt-12 space-y-5">
        {processSteps.map((step, index) => (
          <div key={step} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:flex md:items-center md:gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B75BB] text-lg font-semibold text-white">
              {index + 1}
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-xl font-semibold text-slate-950">{step}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
