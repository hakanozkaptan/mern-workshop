import React, { Component } from 'react';

import { Consumer } from 'context/context';
import { Todo } from 'components';

export class Todos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos = {} } = value;
          return todos.map((todo, index) => <Todo todo={todo} key={`${todo.id}${index}`} />);
        }}
      </Consumer>
    );
  }
}
