import PageShell from '@/components/PageShell';
import AudiencePage from '@/components/AudiencePage';
import { audienceData } from '@/components/siteData';

export default function SchoolsPage() {
  return (
    <PageShell>
      <AudiencePage {...audienceData.schools} />
    </PageShell>
  );
}
