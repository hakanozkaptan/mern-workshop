import { useState } from 'react';
import axios from 'axios';

import { ActionEnum } from 'enums/ActionEnum';

export const useAddTodoForm = callback => {
  const id = 1;
  const complete = false;
  const [inputs, setInputs] = useState({});

  const add = async dispatch => {
    const newTodo = {
      id,
      title: inputs.title,
      complete
    };

    try {
      const addedTodo = await axios.post('/todos', newTodo);
      await dispatch({ type: ActionEnum.ADD, payload: addedTodo.data });
    } catch (error) {
      console.log('error=>', error);
    }
  };

  const handleSubmit = (dispatch, event) => {
    if (event) event.preventDefault();
    add(dispatch);
    if (callback) callback();
  };

  const handleInputChange = event => {
    event.persist();

    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
