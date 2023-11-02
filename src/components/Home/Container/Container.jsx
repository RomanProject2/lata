import { GeneralContainer, ContainerDiv, ContainerA, ContainerSpan, ContainerP, MiddleContainer, Svg, ContainerH6 } from './Container.styled';
import { faPrint, faDroplet, faTruck, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

const Container = () => {
    return (
        <GeneralContainer>
          <MiddleContainer>
            <ContainerDiv style={{ flex: 1 }}>
                <Svg icon={faPrint} />
              <ContainerH6><ContainerSpan>Повноколірний офсетний друк форматом B1</ContainerSpan></ContainerH6>
              <ContainerP>Технології  підприємства дозволяють друкувати форматом 720х1020 мм, що дає змогу робити пакування більшого розміру та економити кошти при виготовленні.</ContainerP>
              <ContainerA to="/services/Povnokolir">Детальніше</ContainerA>
            </ContainerDiv>
            <ContainerDiv style={{ flex: 1 }}>
                <Svg icon={faDroplet} />
                <ContainerH6><ContainerSpan>Лакування ультрафіолетовим лаком форматом B1</ContainerSpan></ContainerH6>
                <ContainerP>Від тепер лакування форматом 720х1020 мм не проблема для клієнтів приватного підприємства "Лата". Якість зображення стала ще краща.</ContainerP>
                <ContainerA to="/services/UFlak">Детальніше</ContainerA>
            </ContainerDiv>
            <ContainerDiv style={{ flex: 1 }}>
                <Svg icon={faGaugeHigh} />
              <ContainerH6><ContainerSpan>Оперативне виконання Ваших замовлень</ContainerSpan></ContainerH6>
              <ContainerP>Ми розуміємо наскільки важливо для клієнта вчасно отримати своє замовлення, тому прикладаємо максимум зусиль, щоб усе було зроблено в терміни.</ContainerP>
              <ContainerA to="/company">Детальніше</ContainerA>
            </ContainerDiv>
            <ContainerDiv style={{ flex: 1 }}>
              <Svg icon={faTruck} />
              <ContainerH6><ContainerSpan>Доставка продукції до компанії замовника</ContainerSpan></ContainerH6>
              <ContainerP>Після виготовлення, ми з радістю доставимо продукцію до Вас нашим транспортом. Доставка Ваших замовлень по Львову відбувається щоденно.</ContainerP>
              <ContainerA to="/services/Perevezennya">Детальніше</ContainerA>
            </ContainerDiv>
          </MiddleContainer>
        </GeneralContainer>
      );
};

export default Container;
