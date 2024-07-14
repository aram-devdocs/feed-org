import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  Form,
  ErrorText,
} from '@feed-org/design-system';
import { Prisma, family } from '@prisma/client';

export interface CreateMemberFormProps {
  onSubmit: (data: Prisma.memberCreateInput) => void;
  families: family[];
}

export const CreateMemberForm = React.memo(
  ({ onSubmit, families }: CreateMemberFormProps) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<Prisma.memberCreateInput>({
      resolver: (data: Prisma.memberCreateInput) => {
        const errors = {} as Record<string, { type: string; message: string }>;
        if (!data.username) {
          errors.username = {
            type: 'required',
            message: 'Username is required',
          };
        }
        if (!data.family_id) {
          errors.family_id = {
            type: 'required',
            message: 'Family is required',
          };
        }
        return {
          values: errors.username || errors.family_id ? {} : data,
          errors,
        };
      },
    });

    return (
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />
          <Controller
            name="family_id"
            control={control}
            defaultValue=""
            rules={{ required: 'Family is required' }}
            render={({ field }) => (
              <Select
                {...field}
                label="Family"
                variant="outlined"
                error={!!errors.family_id}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Family
                </MenuItem>
                {families.map((family) => (
                  <MenuItem key={family.family_id} value={family.family_id}>
                    {family.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          {errors.family_id && (
            <ErrorText>{errors.family_id.message}</ErrorText>
          )}
          <Button type="submit">Create Member</Button>
        </Form>
      </Container>
    );
  }
);
