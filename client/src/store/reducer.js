import { ActionEnum } from 'enums/ActionEnum';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case ActionEnum.TOGGLE:
      return {
        todos: prevState.todos.map(todo => {
          if (todo._id === action.payload) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      };
    case ActionEnum.REMOVE:
      return {
        todos: prevState.todos.filter(todo => todo._id !== action.payload)
      };
    case ActionEnum.ADD:
      return {
        todos: [...prevState.todos, action.payload]
      };
    default:
      return prevState;
  }
};
