import { useState, useEffect } from 'react';
import slice1 from '../../source/slice1.webp';
import slice2 from '../../source/slice2.webp';
import slice3 from '../../source/slice3.webp';
import { MiddleContainer, LeftDiv, Title, P, A, Arrow } from './Middle.styled';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Middle = () => {

  const photoList = [
    {
      src: slice1,
      alt: 'Photo 1',
      title: 'Паперові стакани',
      description: 'Кава та інші напої смакуватимуть ще краще, якщо вони будуть налиті у наші стакани з паперу.',
      link: 'Читати далі',
      id: 15,
    },
    {
      src: slice2,
      alt: 'Photo 2',
      title: 'Для взуття на всі сезони',
      description: 'Для виробників взуття ми пропонуємо найкращі рішення. Ваші клієнти будуть задоволені.',
      link: 'Читати далі',
      id: 11,
    },
    {
      src: slice3,
      alt: 'Photo 3',
      title: 'Пакування для печива',
      description: 'Для гарної весільної забави та інших урочистих подій, добре підійдуть коробки під печиво.',
      link: 'Читати далі',
      id: 9,
    },
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const currentPhoto = photoList[currentPhotoIndex];

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photoList.length - 1 : prevIndex - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoList.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextPhoto, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <MiddleContainer style={{ backgroundImage: `url(${currentPhoto.src})` }}>
      <LeftDiv>
        <Title>{currentPhoto.title}</Title>
        <P>{currentPhoto.description}</P>
        <A to={`/projects/${currentPhoto.id}`}>{currentPhoto.link}</A>
      </LeftDiv>
      <Arrow icon={faChevronRight} onClick={handleNextPhoto} direction="right" />
      <Arrow icon={faChevronLeft} onClick={handlePreviousPhoto} direction="left" />
    </MiddleContainer>
  );
};

export default Middle;