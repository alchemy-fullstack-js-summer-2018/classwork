import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './Search';
import toJSON from 'enzyme-to-json';

describe('Search', () => {


  it('renders as designed', () => {
    // shallow render is "visualization of what got render"
    const wrapper = shallow(<Search onSearch={() => {}}/>);
    // make sure is still doing same thing
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('calls onSearch with criteria entered', () => {
    // jest utility for easy mock functions
    const handleSearch = jest.fn();
    // use "mount" to create our component and put in DOM
    const wrapper = mount(<Search onSearch={handleSearch}/>);

    // "expected"
    const search = 'Star Wars';

    // input and click
    wrapper.find('input').simulate('change', {
      target: { value: search }
    });
    wrapper.find('button').simulate('submit');

    // test we got the search term
    const calls = handleSearch.mock.calls;
    expect(calls.length).toBe(1); // only called once
    expect(calls[0][0]).toEqual({ search });

  });


});

