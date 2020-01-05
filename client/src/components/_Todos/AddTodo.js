import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from 'context';
import { Button } from 'components';
import { ActionEnum } from 'enums/ActionEnum';

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

  add = async (dispatch, e) => {
    e.preventDefault();
    const newTodo = this.state;
    try {
      const addedTodo = await axios.post('/todos', newTodo);
      dispatch({ type: ActionEnum.ADD, payload: addedTodo.data });

      this.setState({
        title: ''
      });
    } catch (error) {
      console.log('error=>', error);
    }
  };

  render() {
    const { title } = this.state;
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
                value={title}
              />
              <Button />
            </form>
          );
        }}
      </Consumer>
    );
  }
}
