import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import styles from './Articles.css';

export default class Articles extends Component {

  static propTypes = {
    articles: PropTypes.arrayOf(Object)
  };

  render() {
    const { articles } = this.props;

    return (
      <ul className={styles.articles}>
        {articles.map((article, i) => (
          <Article key={i} article={article}/>
        ))}
      </ul>
    );
  }
}