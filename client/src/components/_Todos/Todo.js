import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from 'context';

export class Todo extends Component {
  toogle = async (id, dispatch) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  remove = async (id, dispatch) => {
    try {
      const removedTodo = (await axios.delete(`/todos/${id}`)) || false;
      if (removedTodo && removedTodo.data.remove) {
        dispatch({ type: 'REMOVE', payload: id });
      } else {
        console.log(`${id} is not removed`);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  render() {
    const { todo: { title, complete, _id: id } = {} } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <h3
              className='text-dark text-center p-1 bg-light'
              style={{ textDecoration: complete ? 'line-through' : 'none' }}
            >
              <i
                className='far fa-times-circle fa-sm float-left m-1 text-danger cursor-pointer'
                onClick={() => this.remove(id, dispatch)}
              />
              {title}
              <input
                type='checkbox'
                className='m-2 float-right'
                onChange={() => this.toogle(id, dispatch)}
              />
            </h3>
          );
        }}
      </Consumer>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object
};
