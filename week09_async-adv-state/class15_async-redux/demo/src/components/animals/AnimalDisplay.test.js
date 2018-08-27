import { AnimalDisplay } from './AnimalDisplay';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Animal Display', () => {
  
  it('renders display, then edit', () => {
    const handleEdit = jest.fn();
    const handleRemove = jest.fn();

    const wrapper = shallow(<AnimalDisplay 
      animal={{ name: 'name', type: 'type' }}
      onEdit={handleEdit}
      remove={handleRemove}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
    

    wrapper.find('button[name="edit"]').simulate('click');
    const editCalls = handleEdit.mock.calls;
    expect(editCalls.length).toBe(1);

    wrapper.find('button[name="remove"]').simulate('click');
    const removeCalls = handleRemove.mock.calls;
    expect(removeCalls.length).toBe(1);

  });
});
