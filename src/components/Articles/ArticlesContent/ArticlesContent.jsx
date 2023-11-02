import React from 'react';
import { useParams } from 'react-router-dom';
import TitleSection from 'components/TitleSection/TitleSection';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, LeftSideBar, ContainerNew, Img, TextContainer, Text, ContainerH5 } from './ArticlesContent.styled'

const ArticlesContent = ({ articles }) => {
  const { link } = useParams();
  const article = articles.find(article => article.url === `/${link}`);

  if (!article) {
    return <div>Error</div>;
  }
    const formattedDescription = article.description
  .replace(/\t/g, '&emsp;')
  .replace(/\n/g, '<br />');

  return (
    <>
        <TitleSection title={article.title} />
        <Container>
            <LeftSideBar>
                <img src={article.img} alt="" style={{ marginBottom: '20px' }}/>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                    <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA to="/news/Stakan4yky">Спішимо порадувати усіх наших клієнтів.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>Шановні клієнти! Приватне підприємство "Лата" почало випуск нового виду...</ContainerP>
                    <ContainerTitle>
                        <ContainerA to="/news/Novivesil">Нові види подарункових "весільних" коробок з картону хром-ерзац.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>ПП "Лата" розробило новий дизайн подарункових, "весільних", і не тільки...</ContainerP>
                </ContainerDiv>
                <ContainerDiv>
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

export default ArticlesContent;