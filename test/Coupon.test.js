import React from 'react';
import { shallow } from 'enzyme'
import { Coupon } from '../components/coupon/coupon';
import I from 'immutable';

const setup = (props = { context: {}}) => {
  return shallow(<Coupon {...props}/>)
};

test('renders without error', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const wrapper = setup()
  const wrapperDiv = wrapper.find('.coupon-wrapper');
  expect(wrapperDiv.length).toBe(1);

});

test('renders total area correctly', () => {
  // const wrapper = shallow(<Coupon/>)
  const wrapper = setup()
  // total rate area should be render
  const totalDiv = wrapper.find('.total-rate-line');
  expect(totalDiv.length).toBe(1)
});

test('renders counter display', () => {
  // const wrapper = shallow(<Coupon/>)
  const wrapper = setup()
  // selected matches area is rendered correctly
  const couponRows = wrapper.find('.selected-matches');
  expect(couponRows.length).toBe(1)
});

test('if there is not selected match, selected matches area should not be rendered correctly', () => {
  // const wrapper = shallow(<Coupon/>)

  const wrapper = setup()
  //
  const couponRows = wrapper.find('.one-coupon__elem');
  expect(couponRows.length).toBe(0)
});


test('if there is an selected match, selected matches should be rendered correctly', () => {
  // const wrapper = shallow(<Coupon/>)

  const selectedMatches = I.Map().setIn(['selectedTab', '2001', 'id'], ["OCG", "1", "OC", "1"]);

  const wrapper = setup({context: {state: selectedMatches}})
  //
  const couponRows = wrapper.find('.one-coupon__elem');
  expect(couponRows.length).toBe(2)
});
