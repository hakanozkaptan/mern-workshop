import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm, FormContext } from 'react-hook-form';

import { Context } from 'context';
import { Button, Input, Error } from 'components';
import { ActionEnum } from 'enums/ActionEnum';

const ErrorWrapper = styled.div`
  min-height: 2rem;
  width: 100%;
  display: block;
  color: #ff0909;
  text-align: left;
`;

export const AddTodo = () => {
  const { dispatch = () => {} } = useContext(Context);
  const methods = useForm({
    mode: 'onChange'
  });

  const onSubmit = async data => {
    const newTodo = {
      title: data.title,
      complete: false
    };

    try {
      const addedTodo = await axios.post('/todos', newTodo);
      await dispatch({ type: ActionEnum.ADD, payload: addedTodo.data });
    } catch (error) {
      console.error('error=>', error);
    }
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input />
        <Button />
        <ErrorWrapper>
          <Error errors={methods.errors} />
        </ErrorWrapper>
      </form>
    </FormContext>
  );
};
