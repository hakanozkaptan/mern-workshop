import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Loader } from 'components';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  expect(shallow(<Loader />));
});

test('render loading message', () => {
  const wrapper = shallow(<Loader />);

  expect(wrapper.contains('Loading...')).toEqual(true);
});
