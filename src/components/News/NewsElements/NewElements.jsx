import React from 'react';
import { useParams } from 'react-router-dom';
import TitleSection from 'components/TitleSection/TitleSection';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, LeftSideBar, ContainerNew, Img, TextContainer, Text, ContainerH5 } from './NewElements.styled'

const NewElements = ({ news }) => {
  const { link } = useParams();
  const newSelector = news.find(newSelector => newSelector.url === `/${link}`);

  if (!newSelector) {
    return <div>Error</div>;
  }
    const formattedDescription = newSelector.description
  .replace(/\t/g, '&emsp;')
  .replace(/\n/g, '<br />');

  return (
    <>
        <TitleSection title={newSelector.title} />
        <Container>
            <LeftSideBar>
                <img src={newSelector.img} alt="" style={{ marginBottom: '20px' }}/>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA to="/articles/Korobkapidpitsu">Коробка під піцу</ContainerA>
                    </ContainerTitle>
                        <ContainerP>&emsp;Уявіть собі шматок ароматної італійської піци, приготованої щойно, буквально...</ContainerP>
                    <ContainerTitle>
                        <ContainerA to="/articles/Proetyketu">Про етикетку</ContainerA>
                    </ContainerTitle>
                        <ContainerP>&emsp;Етикетка - це ярлик, який за с...</ContainerP>
                <News>Послуги</News>
                    <ContainerNew>
                        <Img src='https://lata.net.ua/upload/iblock/7fb/7fb1eeda1b11653ea40bc63029bcb3ea.jpg' alt="flexprint" style={{margin: '0 15px 15px 0'}}/>
                        <TextContainer>
                            <Text><b>Флексодрук</b> є одним з видів високого друку, в якому замість жорстких друкованих пластин...</Text>
                            <ContainerA to='/services/Nanessenya_zobragennya/'>Читати далі</ContainerA>
                        </TextContainer>
                    </ContainerNew>
                    <ContainerH5>Підготовка до друку</ContainerH5>
                    <ContainerNew>
                        <Img src='https://lata.net.ua/upload/iblock/ebe/ebea54b65681af54d90553a87719dee5.jpg' alt="flexprint" />
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

export default NewElements;