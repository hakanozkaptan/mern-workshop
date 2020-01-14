import React, { useReducer } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* eslint-disable no-undef */

import { Provider } from 'context';
import { reducer } from 'store';

import { Todo } from 'components';

Enzyme.configure({ adapter: new Adapter() });

test('<Todo /> #display', async () => {
  const todos = [
    {
      id: 1,
      title: 'Go To Shop',
      complete: false
    },
    {
      id: 2,
      title: 'Go To Gratis',
      complete: false
    }
  ];
  const dispatch = () => {};
  const list = mount(
    <Provider value={{ state: { todos }, dispatch }}>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={`${todo.id}${index}`} />
      ))}
    </Provider>
  );

  expect(list.find('h3').length).toEqual(2);
});
