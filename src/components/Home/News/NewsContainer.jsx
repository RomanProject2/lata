import { Container, LeftSideBar, RightSideBar, ContainerH3, ContainerAButton, ContainerH5, ContainerDiv, News, ContainerA, ContainerTitle, ContainerP, Img, ContainerNew, TextContainer, Text  } from './NewsContainer.styled'
import boxs from '../../../images/boxes/other/2..webp'
import photo from '../../../images/boxes/other/12.webp'

const NewsContainer = () => {
    return (
        <Container>
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
                </ContainerDiv>
            </RightSideBar>
            <LeftSideBar>
                <ContainerH3>Новини</ContainerH3>
                <ContainerH5>Нанесення зображення флексо та офсетним способом друку</ContainerH5>
                <ContainerNew>
                    <Img src={boxs} alt="flexprint" style={{ margin: '0 15px 15px 0', width: '200px', height: '111px'}} />
                    <TextContainer>
                        <Text><b>Флексодрук</b> є одним з видів високого друку, в якому замість жорстких друкованих пластин застосовуються еластичні флексоформи. Можливість флексографічної машини одночасно друкувати, лакувати, проводити висікання, істотно знижує...</Text>
                        <ContainerAButton to='services/Nanessenya_zobragennya/'>Читати далі</ContainerAButton>
                    </TextContainer>
                </ContainerNew>
                <ContainerH5>Підготовка до друку</ContainerH5>
                <ContainerNew>
                    <Img src={photo} alt="flexprint" />
                    <TextContainer>
                        <Text>Для нас важливо, щоб наше пакування було вироблене за дотриманням всіх необхідних стандартів та вимог. Завдяки натуральній сировині наші вироби безпечні для здоров'я Ваших клієнтів.</Text>
                        <ContainerAButton to='services/Pidgotovka_do_dryky/'>Читати далі</ContainerAButton>
                    </TextContainer>
                </ContainerNew>
            </LeftSideBar>
        </Container>
      );
};

export default NewsContainer;