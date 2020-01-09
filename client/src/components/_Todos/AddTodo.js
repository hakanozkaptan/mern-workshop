import React from 'react';

import { Consumer } from 'context';
import { Button } from 'components';

import { useAddTodoForm } from './AddTodoHooks';

export const AddTodo = () => {
  const { handleSubmit, inputs, handleInputChange } = useAddTodoForm(() => onAdded());
  const onAdded = () => {
    inputs.title = '';
  };

  const submitMe = (dispatch, e) => {
    handleSubmit(dispatch, e);
  };

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <form onSubmit={e => submitMe(dispatch, e)}>
            <input
              type='text'
              name='title'
              onChange={handleInputChange}
              value={inputs.title || ''}
              required
              className='form-control rounded-0'
              placeholder='Add your Todo'
            />

            <Button />
          </form>
        );
      }}
    </Consumer>
  );
};
