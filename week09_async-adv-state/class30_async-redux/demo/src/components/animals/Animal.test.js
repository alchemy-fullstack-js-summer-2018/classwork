import React from 'react';
import { shallow } from 'enzyme';
import { Animal } from './Animal';

describe('Animal', () => {
  
  it('renders display or edit', () => {
    const handleRemove = jest.fn();
    const handleUpdate = jest.fn();

    const animal = { key: 'abc', name: 'f', type: 'c' };
    const wrapper = shallow(<Animal 
      animal={animal}
      onRemove={handleRemove}
      update={handleUpdate}
    />);

    const component = wrapper.instance();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);

  });
});
