import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import Logo from './logo';

describe('<Header />', () => {
  it('It should render logo without errors', () => {
    const component = shallow(<Header />);
    expect(component.find(Logo).length).toBe(1);
  });
});
