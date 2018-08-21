import AnimalForm from './AnimalForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Animal Form', () => {
  
  it('renders add if no animal prop', () => {
    const handleComplete = jest.fn();

    const wrapper = mount(<AnimalForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const animal = {
      name: 'felix',
      type: 'cat'
    };

    wrapper.find('input[name="name"]').simulate('change', {
      target: { 
        name: 'name',
        value: animal.name
      }
    });
    
    wrapper.find('input[name="type"]').simulate('change', {
      target: { 
        name: 'type',
        value: animal.type 
      }
    });

    wrapper.find('button').simulate('submit');

    // test we got the search term
    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1); // only called once
    expect(calls[0][0]).toEqual(animal);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
