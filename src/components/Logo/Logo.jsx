import React from 'react';
import logo from '../../images/logo.png';
import { LogoImg, LogoNav, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoNav to="/">
      <LogoImg src={logo} alt="logo" />
      <LogoText>Лата - надійний партнер у поліграфічній галузі</LogoText>
    </LogoNav>
  );
};

export default Logo;
