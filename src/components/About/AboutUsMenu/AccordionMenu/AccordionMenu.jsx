import React, { useState } from 'react';
import {MenuContainer, MenuItem, Content, RightSideBar, ContainerDiv, Container, News, ContainerTitle, ContainerA, ContainerAActive} from './AccordionMenu.styled'

const AccordionMenu = () => {
    const [openIndex, setOpenIndex] = useState(0);
  
    const handleMenuItemClick = (index) => {
      setOpenIndex(index === openIndex ? -1 : index);
    };
  
    const menuItems = [
      { title: 'Яке мінімальне замовлення?', description: (<div>Ми приймаємо замовлення в залежності від виду продукції:<br /> - гофроящики – 200 шт. і більше; <br />- продукція з картону хром-ерзац - 1000 шт. і більше; <br />- каширована продукція – 1000 шт. і більше.</div>) },
      { title: 'Як довго буде робитися замовлення ?', description: (<div>Мінімальний час виконання замовлення - від 3 днів. Максимальне - 2 тижні.</div>) },
      { title: 'Як оплатити замовлення?', description: (<div>- внести кошти на поточний рахунок;<br />- В касу підприємства;<br />- банківським переказом коштів на поточний рахунок.</div>) },
      { title: 'Чи можна надрукувати мої контакти або логотип ?', description: (<div>У нас можна все.</div>) },
      { title: 'Чи можна у вас замовити доставку в наш склад або офіс?', description: (<div>Доставка на склад (офіс) здійснюється безкоштовно тільки по Львову (при мінімальній сумі 3000 грн на протязі 3 днів). В інші міста адресна доставка обговорюється окремо і оплачується Вами як кур'єрська.</div>) },
      { title: 'Чи можете ви підробити друк або штамп?', description: (<div>Підробкою друку чи штампів ми не займаємося. Ми можемо відновити друк, штамп, по відбитку у разі втрати, пошкодження або застаріння. Зареєстровані торгові марки – тільки з дозволу власника.</div>) },
      { title: 'Чи можливо при потребі повторити замовлення через певний термін?', description: (<div>Всі матриці, використані для виготовлення Вашого замовлення зберігаються у нас в архіві і не можуть бути відтворені без Вашої згоди для інших клієнтів. Так само ми зберігаємо всі копії документів, які Ви надавали при замовленні друку. Для того щоб повторити друк або штамп з Вашого попереднього замовлення досить подати заявку.</div>) },
      { title: 'А можна мені дизайн як у цієї коробки, а колір картону як у цієї ?', description: (<div>Звичайно, можна.</div>) },
      { title: 'Де можна подивитися коробки або оцінити якість?', description: (<div>Все це можна зробити у нас на фірмі «Лата» за адресою Львівська обл, Пустомитівський р-н. Давидів, вул Львівська 2А/9 або при особистій зустрічі з нашим представником на протязі 2-3 днів.</div>) },
    ];
  
    return (
    <Container>
      <MenuContainer>
        {menuItems.map((item, index) => (
          <div key={index}>
            <MenuItem onClick={() => handleMenuItemClick(index)} isOpen={openIndex === index}>
              {item.title}
            </MenuItem>
            <Content isOpen={openIndex === index}>
              <p>{item.description}</p>
            </Content>
          </div>
        ))}
      </MenuContainer>
            <RightSideBar>
            <ContainerDiv>
            <News>Про нас</News>
                <ContainerTitle>
                    <ContainerAActive to="/company/questions">Часті питання</ContainerAActive>
                </ContainerTitle>
                <ContainerTitle>
                    <ContainerA to="/company/vacancies">Вакансії</ContainerA>
                </ContainerTitle>
            </ContainerDiv>
        </RightSideBar>
    </Container>
    );
  };
  
  export default AccordionMenu;
  