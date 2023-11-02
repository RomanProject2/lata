import React from 'react';
// import { Link } from 'react-router-dom';
// import ServicesContainer from './Services/ServicesContainer'
import PrintingServices from '../components/Service/PrintingServices/PrintingServices'
import TitleSection from '../components/TitleSection/TitleSection';

const Services = () => {
  return (
    <div>
      <TitleSection title="Послуги поліграфії" />
      <PrintingServices />
    </div>
  );
};

export default Services;