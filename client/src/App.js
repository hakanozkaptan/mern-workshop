import React from 'react';
import styled from 'styled-components';

import { Header, AddTodo, Todos } from 'components';
import { Provider } from 'context';

const AppContainer = styled.div`
  max-width: 35rem;
  margin: auto;
  text-align: center;
`;

const App = () => (
  <Provider>
    <AppContainer>
      <Header />
      <AddTodo />
      <Todos />
    </AppContainer>
  </Provider>
);

export default App;
