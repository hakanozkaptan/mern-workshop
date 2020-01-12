import React, { useContext } from 'react';

import { Context } from 'context';
import { Todo } from 'components';

export const Todos = () => {
  const { state: { todos = [], isLoading, isError } = {} } = useContext(Context);
  return todos.map((todo, index) => (
    <Todo todo={todo} isLoading={isLoading} isError={isError} key={`${todo.id}${index}`} />
  ));
};
