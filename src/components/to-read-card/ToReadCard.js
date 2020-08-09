import React from 'react';
import './toread.css';
import articles from '../to-read-tab/articles';

export default function ToReadCard({ article }) {
  const { id, img, title } = article;
  return (
    <div className='toread-card'>
      <div
        className='top-card'
        style={{
          background: `url(
            ${img}
          )`,
        }}>
        <div className='card-no'>{id}</div>
      </div>
      <div className='bottomcard text-uppercase'>
        <div>
          {title}
          <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  );
}
