import React, { Component, createContext } from 'react';
import axios from 'axios';

import { reducer } from 'store';

const Context = createContext();

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
