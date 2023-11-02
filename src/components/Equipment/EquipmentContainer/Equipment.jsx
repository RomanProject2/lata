import React, { useState, useEffect } from 'react';
import { MenuItem, MenuLinkActive, Projects, Project, MenuUl, MenuContainer, Background, ButtonShop, CartIcon } from './EquipmentContainer.styled'
import mechanicsData from './machenics';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { useParams } from 'react-router-dom';

const EquipmentContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [, setIsMenuOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [, setSelectedBox] = useState(null);
  // const id = [3]


  useEffect(() => {
    setPhotos(mechanicsData);
  }, []);

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
            <MenuLinkActive onClick={handleAllClick} selected={selectedMenu === 'all'}>Всі</MenuLinkActive>
          </MenuItem>
        </MenuUl>
      </MenuContainer>
       <Projects>
        {filteredPhotos.map((photo) => (
          <div key={photo.id}>
            <Project to={`/obl/${photo.id}`}>
              <img src={photo.url[0]} alt={`${photo.id}`} />
            </Project>
            <Background>
              <ButtonShop to={`/obl/${photo.id}`}><CartIcon icon={faCartShopping} />КУПИТИ</ButtonShop>
              <div onClick={() => handleBoxClick(photo)}>
                <p style={{ color: "#fff" }}>{photo.price} грн</p>
              </div>
            </Background>
          </div>
        ))}
      </Projects>
    </div>
  );
};

export default EquipmentContainer;