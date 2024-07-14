'use client';

import {
  CreateFamilyForm,
  CreateMemberForm,
  CreateRecipeForm,
} from '../components';
import { useCreate } from '../hooks';
import { family } from '@prisma/client';
import { Container } from '@feed-org/design-system';

export const CreatePage = ({
  server_families,
}: {
  server_families?: family[];
}) => {
  const { createFamily, families, createMember } = useCreate({
    server_families,
  });
  return (
    <Container>
      <CreateFamilyForm onSubmit={createFamily} />
      <CreateMemberForm onSubmit={createMember} families={families} />
      <CreateRecipeForm
        onSubmit={(data) => console.log(data)}
        ingredients={[]}
      />
    </Container>
  );
};
