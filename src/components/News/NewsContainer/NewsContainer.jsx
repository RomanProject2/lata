import React, { useEffect, useState } from 'react';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, LeftSideBar, Title, ContainerNew, Img, TextContainer, Text, ContainerH5 } from './NewsContainer.styled';
import newsData from './newsContent';
import boxs from '../../../images/boxes/other/2..webp'
import photo from '../../../images/boxes/other/12.webp'

const NewsContainer = () => {
    const [, setService] = useState([]);

    useEffect(() => {
        setService(newsData);
      }, []);

  return (
    <>
      <Container>
        <LeftSideBar>
        {newsData.map((newsElement) => (
          <div key={newsElement.id} style={{ marginBottom: '60px' }}>
            <Title to={`/news/${newsElement.url}`}>{newsElement.title}</Title>
            <img src={newsElement.img} alt="" style={{ marginBottom: '20px' }} />
            <p style={{ marginBottom: '20px' }}>{newsElement.description}</p>
          </div>
        ))}
        </LeftSideBar>
        <RightSideBar>
          <ContainerDiv>
            <News>Статті</News>
            <ContainerTitle>
              <ContainerA to="/articles/Korobkapidpitsu/">Коробка під піцу</ContainerA>
            </ContainerTitle>
            <ContainerP>Уявіть собі шматок ароматної італійської піци, приготованої щойно, буквально...</ContainerP>
            <ContainerTitle>
              <ContainerA to="/articles/Proetyketu/">Про етикетку</ContainerA>
            </ContainerTitle>
            <ContainerP>Етикетка - це ярлик, який за с...</ContainerP>
            <ContainerTitle>
              <ContainerA to="/articles/Kartonnakorobka/">Картонна коробка та її виробництво</ContainerA>
            </ContainerTitle>
            <ContainerP>Картонна коробка - це досить універсальний пакувальний матеріал. Він...</ContainerP>
            <News>Послуги</News>
            <ContainerNew>
                <Img src={boxs} alt="flexprint" style={{margin: '0 15px 15px 0', width: '200px', height: '111px'}}/>
                <TextContainer>
                    <Text><b>Флексодрук</b> є одним з видів високого друку, в якому замість жорстких друкованих пластин...</Text>
                    <ContainerA to='/services/Nanessenya_zobragennya/'>Читати далі</ContainerA>
                </TextContainer>
            </ContainerNew>
            <ContainerH5>Підготовка до друку</ContainerH5>
            <ContainerNew>
                <Img src={photo} alt="flexprint" style={{ width: '200px', height: '138px'}} />
                <TextContainer>
                    <Text>Крім простої верстки документів у форматі PDF, ПП "Лата" також здійснює...</Text>
                    <ContainerA to='/services/Pidgotovka_do_dryky/'>Читати далі</ContainerA>
                </TextContainer>
            </ContainerNew>
          </ContainerDiv>
        </RightSideBar>
      </Container>
    </>
  );
};

export default NewsContainer;