import React from 'react';

import { Consumer } from 'context';
import { Todo } from 'components';

export const Todos = () => (
  <Consumer>
    {value => {
      const { todos = {} } = value;
      return todos.map((todo, index) => <Todo todo={todo} key={`${todo.id}${index}`} />);
    }}
  </Consumer>
);
