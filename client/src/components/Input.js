import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

/* eslint-disable */
export const Input = () => {
  const {
    register,
    formState: { dirty },
    errors
  } = useFormContext();

  const validationSchema = {
    required: true,
    maxLength: 100,
    minLength: 4
  };

  return useMemo(
    () => (
      <input
        name='title'
        ref={register(validationSchema)}
        type='text'
        className='form-control rounded-0'
        placeholder='Add your Todo'
      />
    ),
    [dirty]
  );
};
