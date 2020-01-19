import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from 'components';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  expect(shallow(<Button />));
});

test('render button value', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper.contains('Add Todo')).toEqual(true);
});

test('has a button', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper.find('button').text()).toEqual('Add Todo');
});
