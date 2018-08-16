import React from 'react';
import { shallow } from 'enzyme';
import Articles from './Articles';
import toJSON from 'enzyme-to-json';

const articles = [
  { id: 1 }, 
  { id: 2 }, 
  { id: 3 }
];

describe('Articles', () => {

  it('renders as designed', () => {
    const wrapper = shallow(<Articles articles={articles}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});

