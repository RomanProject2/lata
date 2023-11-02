import { useState } from 'react';
import {
  Textarea,
  ErrorText,
  ErrorMessageText,
  BtnSend,
  StyledField,
  Settings,
  Container,
  FormDiv,
  StyledFormDiv,
} from './buy.styled';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { sendBuy } from '../../service/help-services';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const CommentSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  phone: Yup.string().required('Номер телефону обов\'язковий'),
  address: Yup.string().required('Адреса обов\'язкова'),
  paymentMethod: Yup.string().required('Метод розрахунку обов\'язковий'),
  message: Yup.string(),
});

const BuyBoxs = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const { photoItem, productName, quantity, finalAmount } = location.state; //photoItem,
  
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
  
    try {
      const buyData = {
        ...values,
        nameOfBox: productName,
        sum: finalAmount,
        quantity,
      };
      await sendBuy(buyData);
      toast.success('Ваша покупка пройшла успішно');
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
    <Container>
      <img src={photoItem[0]} alt="Фото товару" style={{ width: '255px' }} />
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '+380 ',
          address: '',
          paymentMethod: '',
          message: '',
        }}
        validationSchema={CommentSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <StyledFormDiv>
              <FormDiv>
                 <StyledField autoFocus name="name" type="text" placeholder="Ім'я і прізвище" />
                 <ErrorText name="name" component="div" />
               </FormDiv>
               <FormDiv>
                 <StyledField name="email" type="email" placeholder="Email" />
                 <ErrorText name="email" component="div" />
               </FormDiv>
               <FormDiv>
                 <StyledField name="phone" type="tel" maxLength="14" placeholder="Номер телефону" />
                 <ErrorText name="phone" component="div" />
               </FormDiv>
               <FormDiv>
                 <StyledField name="address" type="text" placeholder="Адреса доставки" />
                 <ErrorText name="address" component="div" />
               </FormDiv>
               {/* <FormDiv>
                 <StyledField name="address" type="text" placeholder="Метод доставки" />
                 <ErrorText name="address" component="div" />
               </FormDiv> */}
               {/* <FormDiv>
                <StyledField name="postMethod" as="select" placeholder="Метод доставки">
                  <option value="" disabled>Виберіть метод доставки</option>
                  <option value="нова пошта">Нова пошта</option>
                  <option value="Укр пошта">Укр пошта</option>
                  {/* <option value="готівка">Готівка</option>
                </StyledField>
                </FormDiv> */}

              <FormDiv>
                <Textarea name="message" as="textarea" placeholder="Добавте свої деталі (Не обов'язково)" />
                <ErrorText name="message" component="div" />
              </FormDiv>
              <FormDiv>
                <StyledField name="paymentMethod" as="select" placeholder="Метод розрахунку">
                  <option value="" disabled>Виберіть метод розрахунку</option>
                  <option value="карточка">Кредитна карта</option>
                  <option value="отримати рахунок">Отримати рахунок</option>
                  <option value="готівка">Готівка</option>
                </StyledField>
                <ErrorText name="paymentMethod" component="div" />
              </FormDiv>
            </StyledFormDiv>
            <Settings>
              <FormDiv><p>Назва товару: {productName}</p></FormDiv>
              <FormDiv><p>Кількість: {quantity}</p></FormDiv>
              <FormDiv><p>Загальна сума: {finalAmount}</p></FormDiv>
              <BtnSend type="submit" disabled={isSubmitting}>Надіслати</BtnSend>
              {errorMessage && (
                <ErrorMessageText>{errorMessage}</ErrorMessageText>
              )}
            </Settings>
          </Form>
        )}
      </Formik>
    </Container>
    </>
  );
};

export default BuyBoxs;