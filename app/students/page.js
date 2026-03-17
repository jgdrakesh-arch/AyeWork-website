import PageShell from '@/components/PageShell';
import AudiencePage from '@/components/AudiencePage';
import { audienceData } from '@/components/siteData';

export default function StudentsPage() {
  return (
    <PageShell>
      <AudiencePage {...audienceData.students} />
    </PageShell>
  );
}
