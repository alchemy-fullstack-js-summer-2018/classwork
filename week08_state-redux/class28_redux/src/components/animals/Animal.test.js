import Animal from './Animal';
import React from 'react';
import { shallow } from 'enzyme';

describe('Animal', () => {
  
  it('renders display or edit', () => {
    const handleRemove = jest.fn();
    const handleUpdate = jest.fn();

    const animal = { key: 'abc', name: 'f', type: 'c' };
    const wrapper = shallow(<Animal 
      animal={animal}
      onRemove={handleRemove}
      onUpdate={handleUpdate}
    />);

    const component = wrapper.instance();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);

    component.handleDelete();

    const removeCalls = handleRemove.mock.calls;
    expect(removeCalls.length).toBe(1); // only called once
    expect(removeCalls[0][0]).toBe(animal.key);

  });
});
