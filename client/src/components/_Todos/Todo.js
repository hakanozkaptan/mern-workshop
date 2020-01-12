import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import { Context } from 'context';
import { Loader } from 'components';
import { ActionEnum } from 'enums/ActionEnum';

const H3 = styled.h3`
  text-decoration: ${props => (props.complete ? 'line-through' : 'none')};
`;

export const Todo = ({ isLoading, todo: { title, complete, _id: id } = {} }) => {
  const { dispatch = () => {} } = useContext(Context);

  const toogle = async (id, dispatch) => {
    dispatch({ type: ActionEnum.TOGGLE, payload: id });
  };

  const remove = async (id, dispatch) => {
    try {
      const removedTodo = (await axios.delete(`/todos/${id}`)) || false;
      if (removedTodo && removedTodo.data.remove) {
        dispatch({ type: ActionEnum.REMOVE, payload: id });
      } else {
        console.log(`${id} is not removed`);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <H3 complete={complete} className='text-dark text-center p-1 bg-light'>
      <i
        className='far fa-times-circle fa-sm float-left m-1 text-danger'
        onClick={() => remove(id, dispatch)}
      />
      {title}
      <input type='checkbox' className='m-2 float-right' onChange={() => toogle(id, dispatch)} />
    </H3>
  );
};

Todo.propTypes = {
  todo: PropTypes.object
};
