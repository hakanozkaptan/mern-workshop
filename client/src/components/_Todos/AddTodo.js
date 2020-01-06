import React, { useState } from 'react';
import axios from 'axios';

import { Consumer } from 'context';
import { Button } from 'components';
import { ActionEnum } from 'enums/ActionEnum';

export const AddTodo = () => {
  const id = 1;
  const complete = false;
  const [title, setTitle] = useState('');

  const update = e => {
    setTitle(e.target.value);
  };

  const add = async (dispatch, e) => {
    e.preventDefault();

    const newTodo = {
      id,
      title,
      complete
    };

    try {
      const addedTodo = await axios.post('/todos', newTodo);
      await dispatch({ type: ActionEnum.ADD, payload: addedTodo.data });

      setTitle('');
    } catch (error) {
      console.log('error=>', error);
    }
  };

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <form onSubmit={e => add(dispatch, e)}>
            <input
              onChange={update}
              type='text'
              className='form-control rounded-0'
              placeholder='Add your Todo'
              value={title}
            />
            <Button />
          </form>
        );
      }}
    </Consumer>
  );
};
