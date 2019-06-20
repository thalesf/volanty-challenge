import React from 'react';
import { shallow } from 'enzyme';
import Select from 'react-select';

import Form from './form';
import { Heading } from '../../shared/text';

describe('<Form />', () => {
  it('It should render Heading Component', () => {
    const component = shallow(<Form />);
    expect(component.find(Heading).length).toBe(1);
  });

  it('It should render Select', () => {
    const component = shallow(<Form />);
    expect(component.find(Select).length).toBe(3);
  });
});
