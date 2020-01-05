import React from 'react';

import { Header, AddTodo, Todos } from 'components';
import { Provider } from 'context';

import './App.css';

function App() {
  return (
    <Provider>
      <div className='app'>
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
