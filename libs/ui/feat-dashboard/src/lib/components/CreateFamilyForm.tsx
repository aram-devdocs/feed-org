import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Container,
  TextField,
  Form,
  genericResolver,
} from '@feed-org/design-system';
import { Prisma } from '@prisma/client';

export interface CreateFamilyFormProps {
  onSubmit: (data: Prisma.familyCreateInput) => void;
}

export const CreateFamilyForm = React.memo(
  ({ onSubmit }: CreateFamilyFormProps) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<Prisma.familyCreateInput>({
      resolver: genericResolver<Prisma.familyCreateInput>({
        name: String,
      }),
    });

    return (
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Button type="submit">Create Family</Button>
        </Form>
      </Container>
    );
  }
);
