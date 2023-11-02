import React from 'react';
import { useParams } from 'react-router-dom';
import TitleSection from 'components/TitleSection/TitleSection';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, LeftSideBar } from './ServiceElements.styled'

const ServiceElements = ({ services }) => {
  const { link } = useParams();
  const serviceSelector = services.find(serviceSelector => serviceSelector.url === `/${link}`);

  if (!serviceSelector) {
    return <div>Error</div>;
  }

    const formattedDescription = serviceSelector.description
  .replace(/\t/g, '&emsp;')
  .replace(/\n/g, '<br />');

  return (
    <>
        <TitleSection title={serviceSelector.title} />
        <Container>
            <LeftSideBar>
                <img src={serviceSelector.path} alt="" style={{ marginBottom: '20px' }}/>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA to="/news/Stakan4yky/">Спішимо порадувати усіх наших клієнтів</ContainerA>
                    </ContainerTitle>
                        <ContainerP>Шановні клієнти! Приватне підприємство "Лата" почало  випуск нового виду...</ContainerP>
                    <ContainerTitle>
                        <ContainerA to="/news/Novivesil/">Нові види подарункових "весільних" коробок з картону хром-ерзац.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>ПП "Лата" розробило новий дизайн подарункових, "весільних", і не тільки...</ContainerP>
                    </ContainerDiv>
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
                </ContainerDiv>
            </RightSideBar>
        </Container>
    </>
  );
};

export default ServiceElements;