import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';
// import toJSON from 'enzyme-to-json';

describe('Search', () => {

  it('calls onSearch with criteria entered', () => {
    const handleSearch = jest.fn();
    const wrapper = mount(<Search onSearch={handleSearch}/>);

    const search = 'Star Wars';

    // input and click
    wrapper.find('input').simulate('change', {
      target: { value: search }
    });
    wrapper.find('button').simulate('submit');

    // test we got the search term
    const calls = handleSearch.mock.calls;
    expect(calls.length).toBe(1); // only called once
    expect(calls[0][0].search).toBe(search);

  });


});


// it('renders as designed', () => {
//   const wrapper = shallow(<Search onSearch={() => {}}/>);
//   expect(toJSON(wrapper)).toMatchSnapshot();
// });