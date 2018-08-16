import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';
import logo from '../../assets/logo.png';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { article } = this.props;
    const { title, author, description } = article;
    const { publishedAt, url, urlToImage } = article;

    return (
      <li className={styles.article}>
        <img src={urlToImage || logo}/>
        <div className="content">
          <h2>
            <a href={url} 
              target="_blank" 
              rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>by {author} on {new Date(publishedAt).toLocaleString()}</p>
          <p>{description}</p>
        </div>


      </li>
    );
  }
}