import { reducer } from 'store/reducer';
/* eslint-disable no-undef */

const initialState = {
  todos: [
    {
      _id: 1,
      title: 'Go to Shop',
      complete: false
    }
  ],
  isLoading: false
};

const payload = {
  _id: 2,
  title: 'Go to Restaurant',
  complete: false
};

test('Adding Todo', async () => {
  const state = initialState;
  const newState = reducer(state, { type: 'ADD', payload: payload });

  expect(newState.todos).toEqual([...state.todos, payload]);
});

test('Remove Todo', async () => {
  const state = initialState;
  const newState = reducer(state, {
    type: 'REMOVE',
    payload: 1
  });

  expect(newState.todos).toEqual([]);
});
