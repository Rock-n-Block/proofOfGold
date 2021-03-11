import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const setUp = (props?: any) => shallow(<Button {...props}></Button>);

describe('Button Component', () => {
  it('Renders Button', () => {
    const button = setUp();
    expect(button).toMatchSnapshot();
  });

  it('Render Button with size class', () => {
    const button = setUp({
      size: 'lg',
    });
    expect(button.hasClass('btn-lg')).toBe(true);
  });
  it('Render Button with colorScheme class', () => {
    const button = setUp({
      colorScheme: 'black',
    });
    expect(button.hasClass('btn-black')).toBe(true);
  });
  it('Render Button with centered class', () => {
    const button = setUp({
      centered: true,
    });
    expect(button.hasClass('centered')).toBe(true);
  });
  it('Render disabled Button', () => {
    const button = setUp({
      disabled: true,
    });
    expect(button.props().disabled).toBe(true);
  });
  it('Render click Button', () => {
    const result: any =
      Button.defaultProps &&
      Button.defaultProps.onClick &&
      Button.defaultProps.onClick();

    expect(result).toBe(undefined);
  });
});
