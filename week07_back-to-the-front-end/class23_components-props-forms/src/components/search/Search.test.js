import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SearchForm from './SearchForm';

describe('SearchForm', () => {

  it('renders as designed', () => {
    const wrapper = shallow(<SearchForm onSearch={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders with search term as designed', () => {
    const wrapper = shallow(<SearchForm searchTerm="star wars" onSearch={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('calls onSearch with criteria entered', () => {
    const handleFilter = jest.fn();
    const wrapper = mount(<SearchForm onSearch={handleFilter}/>);
    
    const search = 'Star Wars';

    // input and click
    wrapper.find('input').simulate('change', {
      target: { value: search }
    });

    wrapper.find('button').simulate('submit');

    // test we got the filter
    expect(handleFilter.mock.calls.length).toBe(1);
    expect(handleFilter.mock.calls[0][0]).toBe(search);

  });

});