import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import toJSON from 'enzyme-to-json';

const article = {
  'source': {
    'id': null,
    'name': 'Bitcoinist.com'
  },
  'author': 'Wilma Woo',
  'title': '‘It’ll Happen Anyway’: Andreas Antonopoulos Criticizes Bitcoin ETFs',
  'description': 'Exchange-traded funds (ETFs) “fundamentally undermine the underlying principle of peer-to-peer money,” Andreas Antonopoulos claimed, adopting a critical stance on the financial instrument. ‘Not Your Keys – Not Your Bitcoin’ As part of his monthly Q&A session …',
  'url': 'https://bitcoinist.com/andreas-antonopoulos-criticizes-bitcoin-etfs/',
  'urlToImage': 'https://bitcoinist.com/wp-content/uploads/2018/03/wc-antonopoulos.jpg',
  'publishedAt': '2018-08-15T21:00:04Z'
};

describe('Article', () => {


  it('renders as designed', () => {
    const wrapper = shallow(<Article article={article}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders without image', () => {
    const noImageArticle = { ...article, urlToImage: null };
    const wrapper = shallow(<Article article={noImageArticle}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});

