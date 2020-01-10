import React, { useContext } from 'react';

import { Context } from 'context';
import { Todo } from 'components';

export const Todos = () => {
  const { todos = [] } = useContext(Context);
  return todos.map((todo, index) => <Todo todo={todo} key={`${todo.id}${index}`} />);
};
