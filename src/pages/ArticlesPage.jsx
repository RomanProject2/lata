import React from 'react';
import TitleSection from '../components/TitleSection/TitleSection';
import ArticlesContainer from '../components/Articles/ArticlesContainer/ArticlesContainer'
// import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <>
      <TitleSection title="Статті" />
      <ArticlesContainer />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </>
  );
};

export default Articles;