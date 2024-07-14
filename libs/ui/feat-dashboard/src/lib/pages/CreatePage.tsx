'use client';

import { CreateFamilyForm } from '../components';
import { useFamily } from '../hooks';

export const CreatePage = () => {
  const { createFamily } = useFamily();
  return <CreateFamilyForm onSubmit={createFamily} />;
};
