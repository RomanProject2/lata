import React from 'react';
// import { Link } from 'react-router-dom';
import TitleSection from '../components/TitleSection/TitleSection';
import EquipmentContainer from '../components/Equipment/EquipmentContainer/Equipment';

const Equipment = () => {
  return (
    <div>
      <TitleSection title="Продаж обладнання" />
      <EquipmentContainer />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Equipment;