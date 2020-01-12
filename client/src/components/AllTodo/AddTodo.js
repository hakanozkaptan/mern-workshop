import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm, FormContext } from 'react-hook-form';

import { Context } from 'context';
import { Button, Input } from 'components';
import { ActionEnum } from 'enums/ActionEnum';

const ErrorWrapper = styled.div`
  min-height: 2rem;
`;

const Error = styled.span`
  width: 100%;
  display: block;
  color: #ff0909;
  text-align: left;
`;

export const AddTodo = () => {
  const { dispatch = () => {} } = useContext(Context);
  const methods = useForm();

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
          {methods.errors.title && methods.errors.title.type === 'required' && (
            <Error>- Title is required</Error>
          )}
          {methods.errors.title && methods.errors.title.type === 'maxLength' && (
            <Error>- Max Length 100</Error>
          )}
          {methods.errors.title && methods.errors.title.type === 'minLength' && (
            <Error>- Min Length 4</Error>
          )}
        </ErrorWrapper>
      </form>
    </FormContext>
  );
};
