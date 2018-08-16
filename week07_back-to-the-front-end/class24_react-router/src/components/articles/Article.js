import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

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
        
        <h2>{title}</h2>
        <p>by {author} on {new Date(publishedAt).toLocaleString()}</p>
        <p>
          <a href={url} 
            target="_blank" 
            rel="noopener noreferrer">
            view article
          </a>
        </p>

        <p>{description}</p>

        {urlToImage && 
          <p className="image">
            <img src={urlToImage}/>
          </p>
        }
      </li>
    );
  }
}