import React from 'react';
import AboutUsCompany from '../components/About/AboutUsCompany/AboutUsCompany';
import TitleSection from '../components/TitleSection/TitleSection';

const AboutPage = () => {
  return (
    <div>
      <TitleSection title="Про компанію" />
      <AboutUsCompany />
    </div>
  );
};

export default AboutPage;