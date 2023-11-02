import React, { useState, useEffect } from 'react';
import { MenuItem, MenuLinkActive, Projects, Project, MenuUl, MenuContainer, Background, ButtonShop, CartIcon, CantBuyButtonShop } from './Content.styled' // MenuLink 
import boxesData from './boxs';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [, setSelectedBox] = useState(null);
  const id = [3]

  useEffect(() => {
    setPhotos(boxesData);
  }, []);

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
    setIsMenuOpen(false);
    setIsAllSelected(false);
  };

  const handleAllClick = () => {
    if (!isAllSelected) {
      setIsMenuOpen(true);
    } else {
      setSelectedMenu('all');
      setIsMenuOpen(false);
    }
    setIsAllSelected((prevIsAllSelected) => !prevIsAllSelected);
  };

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  const filteredPhotos = selectedMenu === 'all' ? photos : photos.filter(photo => photo.category === selectedMenu);

  return (
    <div>
      <MenuContainer>
        <MenuUl>
          <MenuItem>
            <MenuLinkActive onClick={handleAllClick} selected={selectedMenu === 'all'}>Всі {isMenuOpen ? <FiChevronDown /> : <FiChevronRight />}</MenuLinkActive>
            {isMenuOpen && (
              <div style={{ position: 'relative' }}>
                <ul style={{ zIndex: 1, position: 'absolute', background: 'white', padding: '10px', border: '1px solid #9AC43C', borderRadius: '10px', left: '-10px', width: '180px' }}>
                  <li>
                    <MenuLinkActive onClick={() => handleMenuChange('CorrugatedCardboard')} selected={selectedMenu === 'CorrugatedCardboard'}>Гофро картон</MenuLinkActive>
                  </li>
                  <li>
                    <MenuLinkActive onClick={() => handleMenuChange('FullColorPackaging')} selected={selectedMenu === 'FullColorPackaging'}>Повноколірна упаковка</MenuLinkActive>
                  </li>
                  <li>
                    <MenuLinkActive onClick={() => handleMenuChange('PaperCups')} selected={selectedMenu === 'PaperCups'}>Паперові стакани</MenuLinkActive>
                  </li>
                </ul>
              </div>
            )}
          </MenuItem>
        </MenuUl>
      </MenuContainer>
       <Projects>
        {filteredPhotos.map((photo) => (
          <div key={photo.id}>
            <Project to={`/projects/${photo.id}`}>
              <img src={photo.url[0]} alt={`${photo.id}`} style={{ width: '249px'}}/>
            </Project>
            <Background>
            {id.includes(photo.id) ? ( 
              <CantBuyButtonShop><CartIcon icon={faCartShopping} />КУПИТИ</CantBuyButtonShop>
            ) : (
              <>
                <ButtonShop to={`/projects/${photo.id}`}><CartIcon icon={faCartShopping} />КУПИТИ</ButtonShop>
                <div onClick={() => handleBoxClick(photo)}>
                  <p style={{ color: "#fff" }}>{photo.price} грн</p>
                </div>
              </>
            )}
            </Background>
          </div>
        ))}
      </Projects>
    </div>
  );
};

export default Content;