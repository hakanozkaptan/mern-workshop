import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import { reducer } from 'store';
import { ActionEnum } from 'enums/ActionEnum';

const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer);

  useEffect(() => {
    const fetchTodos = async () => {
      dispatch({ type: ActionEnum.FETCH_INIT });
      try {
        const result = await axios.get('/todos');
        if (result) {
          dispatch({ type: ActionEnum.FETCH_SUCCESS, payload: result.data });
        }
      } catch (error) {
        dispatch({ type: ActionEnum.FETCH_FAILURE });
      }
    };
    fetchTodos();
  }, []);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context };
