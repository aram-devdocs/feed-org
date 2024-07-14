import { useEffect, useState, useCallback, useMemo } from 'react';
import { Prisma, family, member } from '@prisma/client';
import { familyResolver, memberResolver } from '@feed-org/data-access';

export interface UseCreate {
  server_families?: family[];
  server_members?: member[];
}
export const useCreate = ({ server_families, server_members }: UseCreate) => {
  const [families, setFamilies] = useState<family[]>(server_families || []);
  const [members, setMembers] = useState<member[]>(server_members || []);

  useEffect(() => {
    if (server_families) {
      return;
    }
    familyResolver.Query.families().then((families) => {
      setFamilies(families);
    });
  }, [server_families]);

  useEffect(() => {
    if (server_members) {
      return;
    }
    memberResolver.Query.members().then((members) => {
      setMembers(members);
    });
  }, [server_members]);

  const createFamily = useCallback(
    async (data: Prisma.familyCreateInput) => {
      const family = await familyResolver.Mutation.createFamily(data);

      if (family) setFamilies((prev) => [...prev, family]);
      alert(family ? 'Family created successfully' : 'Failed to create family');
    },
    [setFamilies]
  );

  const createMember = useCallback(
    async (data: Prisma.memberCreateInput) => {
      const member = await memberResolver.Mutation.createMember(data);

      if (member) setMembers((prev) => [...prev, member]);
      alert(member ? 'Member created successfully' : 'Failed to create member');
    },
    [setMembers]
  );

  return {
    families,
    members,
    createFamily,
    createMember,
  };
};
