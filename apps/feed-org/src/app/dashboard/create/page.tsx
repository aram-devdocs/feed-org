import { CreatePage } from '@feed-org/feat-dashboard';
import { familyResolver } from '@feed-org/data-access';

export default async function CreateFamilyPage() {
  const server_families = await familyResolver.Query.families();
  return <CreatePage server_families={server_families} />;
}
