import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

/* eslint-disable */
export const Input = () => {
  const {
    register,
    formState: { dirty }
  } = useFormContext();

  return useMemo(
    () => (
      <div>
        <input
          name='title'
          ref={register({ required: true, maxLength: 100, minLength: 4 })}
          type='text'
          className='form-control rounded-0'
          placeholder='Add your Todo'
        />
      </div>
    ),
    [dirty]
  );
};
