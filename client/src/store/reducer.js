import { ActionEnum } from 'enums/ActionEnum';

const initialState = {
  todos: [],
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionEnum.FETCH_INIT:
      return {
        ...state,
        isLoading: true
      };
    case ActionEnum.FETCH_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload
      };
    case ActionEnum.FETCH_FAILURE:
      return {
        ...state,
        isLoading: true
      };
    case ActionEnum.TOGGLE:
      return {
        todos: state.todos.map(todo => {
          if (todo._id === action.payload) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      };
    case ActionEnum.REMOVE:
      return {
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    case ActionEnum.ADD:
      return {
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
