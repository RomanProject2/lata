import React from 'react';
// import { Link } from 'react-router-dom';
import NewsContainer from '../components/News/NewsContainer/NewsContainer';
import TitleSection from '../components/TitleSection/TitleSection';

const News = () => {
  return (
    <div>
      <TitleSection title="Новини" />
      <NewsContainer />
    </div>
  );
};

export default News;