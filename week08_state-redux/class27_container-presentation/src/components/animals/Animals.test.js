import React from 'react';
import { shallow } from 'enzyme';
import Animals from './Animals';
import toJSON from 'enzyme-to-json';

describe('Animals', () => {
  
  it('renders add if no animal prop', () => {
    const animals = [
      { name: 'felix', type: 'cat', key: 'abc' },
      { name: 'garfield', type: 'cat', key: 'def' },
      { name: 'lassie', type: 'dog', key: 'ghi' },
    ];
    const wrapper = shallow(<Animals 
      animals={animals}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});