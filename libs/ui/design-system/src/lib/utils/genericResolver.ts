import { Prisma } from '@prisma/client';
import { Resolver } from 'react-hook-form';

type ValidationRules<T> = {
  [K in keyof T]?: (value: any) => string | null;
};

const createValidationRules = <T extends object>(
  schema: any
): ValidationRules<T> => {
  const rules: ValidationRules<T> = {};

  for (const key in schema) {
    if (schema[key] === String) {
      rules[key as keyof T] = (value: any) => {
        if (typeof value !== 'string' || value.trim().length === 0) {
          return `${key} is required`;
        }
        return null;
      };
    }
    // Add other types and validation rules here based on your schema
  }

  return rules;
};

const validateData = <T extends object>(data: T, rules: ValidationRules<T>) => {
  const errors: any = {};

  for (const key in rules) {
    const error = rules[key as keyof T]?.(data[key as keyof T]);
    if (error) {
      errors[key] = error;
    }
  }

  return errors;
};

export const genericResolver: <T extends object>(schema: any) => Resolver<T> = (
  schema
) => {
  const rules = createValidationRules(schema);

  return async (data) => {
    const errors = validateData(data, rules);

    return {
      values: data,
      errors: Object.keys(errors).length ? errors : {},
    };
  };
};
