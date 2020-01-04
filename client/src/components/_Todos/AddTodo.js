import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from 'context/context';

export class AddTodo extends Component {
  state = {
    id: 4,
    title: '',
    complete: false
  };

  update = e => {
    this.setState({
      title: e.target.value
    });
  };

  add = (dispatch, e) => {
    e.preventDefault();
    const newTodo = this.state;
    axios
      .post('/todos', newTodo)
      .then(res => {
        dispatch({ type: 'ADD', payload: res.data });

        this.setState({
          title: ''
        });
      })
      .catch(err => console.log('error=>', err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={e => this.add(dispatch, e)}>
              <input
                onChange={this.update}
                type='text'
                className='form-control rounded-0'
                placeholder='Add your Todo'
                value={this.state.title}
              />
              <button type='submit' className='form-control rounded-0 btn-secondary'>
                Add Todo
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
