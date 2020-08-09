import React from 'react';
import ToReadCard from '../to-read-card/ToReadCard';
import articles from './articles';

export default function ToReadTab() {
  const getToReads = (articles) => {
    return articles.map((article, i) => {
      return <ToReadCard id={i} article={article} />;
    });
  };

  return <div>{getToReads(articles)}</div>;
}
