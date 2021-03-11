import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CartItem from './index';
import { CartItemProps } from './index';

const cartItemData = {
  bonus_coins: 32.5,
  quantity: 1,
  description: null,
  group: 'gold_coin',
  id: '4',
  image: 'd-pog.com/media/1614960293.494851.png',
  lucky_prize: 400,
  name: '21 grams – Ducatus Prime Gold Coin',
  price: 1877.21,
  reviews: [],
  sold: 0,
  supply: 1597,
  total_supply: 1597,
  totalPrise: 1877.21,
  addMore: () => {},
  deleteOneOf: () => {},
  deleteCurrent: () => {},
};

const setUp = (props?: CartItemProps): ShallowWrapper =>
  shallow(<CartItem {...cartItemData} {...props} />);

describe('should render CartItem component', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });
  it('should CartItem Render', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should deleteCurrent deleted', () => {
    const btn = component.find('.c-item__close');
    btn.simulate('click');

    expect(component).toMatchSnapshot();
  });
});
