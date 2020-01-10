import React, { useState, useContext } from 'react';
import axios from 'axios';

import { Context } from 'context';
import { Button } from 'components';
import { ActionEnum } from 'enums/ActionEnum';

export const AddTodo = () => {
  const id = 1;
  const complete = false;
  const [title, setTitle] = useState('');

  const { dispatch = () => {} } = useContext(Context);

  const update = e => {
    setTitle(e.target.value);
  };

  const add = async e => {
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
    <form onSubmit={e => add(e)}>
      <input
        required
        onChange={update}
        type='text'
        className='form-control rounded-0'
        placeholder='Add your Todo'
        value={title}
      />
      <Button />
    </form>
  );
};
