import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Container,
  TextField,
  Chip,
  Autocomplete,
  Form,
  ErrorText,
} from '@feed-org/design-system';
import { Prisma, ingredient } from '@prisma/client';

export interface CreateRecipeFormProps {
  onSubmit: (data: Prisma.recipeCreateInput) => void;
  ingredients: ingredient[];
}

export const CreateRecipeForm = React.memo(
  ({ onSubmit, ingredients }: CreateRecipeFormProps) => {
    const {
      control,
      handleSubmit,
      setValue,
      getValues,
      formState: { errors },
    } = useForm<Prisma.recipeCreateInput>({
      resolver: (data: Prisma.recipeCreateInput) => {
        const errors = {} as Record<string, { type: string; message: string }>;
        if (!data.name) {
          errors.name = {
            type: 'required',
            message: 'Recipe name is required',
          };
        }
        if (!data.ingredients || data.ingredients.length === 0) {
          errors.ingredients = {
            type: 'required',
            message: 'At least one ingredient is required',
          };
        }
        return {
          values: errors.name || errors.ingredients ? {} : data,
          errors,
        };
      },
    });

    const [ingredientInput, setIngredientInput] = useState('');
    return (
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Recipe name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Recipe Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          {/*  for ingredients, we want to show a list of ingredients that is passed, and allow a new one to be entered. the enter key will trigger the new ingredient to be added to the list */}
          <Controller
            name="ingredients"
            control={control}
            defaultValue={[]}
            rules={{ required: 'At least one ingredient is required' }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                multiple
                options={ingredients}
                getOptionLabel={(option) => option.name}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip label={option.name} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Ingredients"
                    variant="outlined"
                    error={!!errors.ingredients}
                    helperText={errors.ingredients?.message}
                    onChange={(e) => {
                      setIngredientInput(e.target.value);
                    }}
                  />
                )}
                onChange={(_, value) => {
                  setValue('ingredients', value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const newIngredient = getValues('ingredients').find(
                      (ingredient) => ingredient.name === e.currentTarget.value
                    );
                    if (!newIngredient) {
                      setValue('ingredients', [
                        ...getValues('ingredients'),
                        { name: ingredientInput },
                      ]);
                    }
                  }
                }}
              />
            )}
          />

          <Controller
            name="instructions"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Instructions"
                variant="outlined"
                multiline
                rows={4}
              />
            )}
          />
          {errors.ingredients && (
            <ErrorText>{errors.ingredients.message}</ErrorText>
          )}
          <Button type="submit">Create Recipe</Button>
        </Form>
      </Container>
    );
  }
);
