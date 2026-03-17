import PageShell from '@/components/PageShell';
import AudiencePage from '@/components/AudiencePage';
import { audienceData } from '@/components/siteData';

export default function OrganizationsPage() {
  return (
    <PageShell>
      <AudiencePage {...audienceData.organizations} />
    </PageShell>
  );
}
