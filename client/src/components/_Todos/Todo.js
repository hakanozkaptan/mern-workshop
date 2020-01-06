import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from 'context';

export const Todo = ({ todo: { title, complete, _id: id } = {} }) => {
  const toogle = async (id, dispatch) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const remove = async (id, dispatch) => {
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
              onClick={() => remove(id, dispatch)}
            />
            {title}
            <input
              type='checkbox'
              className='m-2 float-right'
              onChange={() => toogle(id, dispatch)}
            />
          </h3>
        );
      }}
    </Consumer>
  );
};

Todo.propTypes = {
  todo: PropTypes.object
};
