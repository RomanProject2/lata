import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuContainer = styled.div`
  max-width: 1170px;
  margin-left: 25px;
`;

export const MenuUl = styled.ul`
  display: flex;
  gap: 15px;
  margin: 30px 0 30px 0;
`;

export const MenuLinkActive = styled(Link)(({ selected }) => ({
  fontSize: '13px',
  fontWeight: '700',
  color: selected ? '#9AC43C' : '#111',
  display: 'flex',
  alignItems: 'center'
}));

export const MenuItem = styled.li`
  font-size: 13px;
  font-weight: 700;
  color: #111;
  z-index: 2;
`;

export const ContainerA = styled(Link)`
  color: #9AC43C;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 1px solid #9AC43C;
    }
`;

export const FilterContainer = styled.div`
  position: absolute;
  top: 30px; /* Розташовуємо фільтр знизу від посилання "Всі" */
  right: 0;
  width: 150px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const FilterItem = styled(Link)`
  color: #111;
  text-decoration: none;
  padding: 4px 0;
  &:hover {
    color: #9ac43c;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Змінено ширину колонок на 250px */
  gap: 25px;
  padding: 0px 25px 45px 25px;
  align-items: center;
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 15px;
  }
`;

export const Project = styled(Link)`
  border-top: 1px solid #e6e6e6; 
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  display: flex;
  justify-content: center; /* Центрування по горизонталі */
  align-items: center; /* Центрування по вертикалі */
  height: 250px;
  img{
    transition: filter 0.2s ease;
  }

  &:hover {
    img{
      filter: brightness(110%);
    }
  }
`;

export const Background = styled.div`
  background: #252525;
  max-width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse; 
  padding: 10px 20px;
  border-radius: 0px 0px 10px 10px;
  justify-content: space-between;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  margin-right: 8px; /* Відступ справа від тексту "КУПИТИ" */
`;

export const CantBuyButtonShop = styled(Link)`
  background: #72854a;
  color: #fff;
  padding: 2px 10px;
  border-radius: 20px;
`;

export const ButtonShop = styled(Link)`
  background: #9AC43C;
  color: #fff;
  padding: 2px 10px;
  border-radius: 20px;

&:hover {
  background: #8ac930;
}

&:active {
  background: #8ac930;
  top: 2px;
}

&:before {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  line-height: 3;
  font-size: 140%;
  width: 60px;
}
`;