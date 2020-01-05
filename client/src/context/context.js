import React, { Component, createContext } from 'react';
import axios from 'axios';

import { ActionEnum } from 'enums/ActionEnum';

const Context = createContext();

const reducer = (prevState, action) => {
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

export class Provider extends Component {
  state = {
    todos: [],
    dispatch: action => this.dispatcher(action)
  };

  async componentDidMount() {
    const data = await axios.get('/todos');
    try {
      if (data) {
        this.setState({
          todos: data.data
        });
      }
    } catch (error) {
      console.log(`fetching error ${error}`);
    }
  }

  dispatcher = action => this.setState(prevState => reducer(prevState, action));

  render() {
    const { children } = this.props;

    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
