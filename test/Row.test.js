import React from 'react';
import { shallow } from 'enzyme'
import { Row } from '../components/table/row/row';

const setup = (props = { context: {}}) => {
  return shallow(<Row {...props}/>)
};

test('renders without error', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const wrapper = setup()
  const wrapperDiv = wrapper.find('.one-row');
  expect(wrapperDiv.length).toBe(1);
});

test('renders without error with 19 cell component', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const wrapper = setup({ context: {}, className: 'test'})

  expect(wrapper.find('.test').length).toBe(19);
});
