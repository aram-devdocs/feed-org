import { useEffect, useState, useCallback, useMemo } from 'react';
import { Prisma, family } from '@prisma/client';
import axios from 'axios';

export const useFamily = () => {
  const [family, setFamily] = useState<family | null>(null);

  const createFamily = useCallback(async (data: Prisma.familyCreateInput) => {
    const response = await axios.post<family>('/api/families', data);

    alert(
      response.status === 201
        ? 'Family created successfully'
        : 'Failed to create family'
    );
    setFamily(response.data);
  }, []);

  return { family, createFamily };
};
