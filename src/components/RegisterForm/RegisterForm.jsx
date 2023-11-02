import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
// import googleLogo from '../../images/googleLogo.svg';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  ErrorText,
  Inputs,
  Menu,
  Container,
  PasswordInput,
  Content,
  RegisterBtn,
  StyledRegistrationLink,
  StyledLink,
  PasswordToggle,
  PasswordIcon,
  // GoogleButton
} from './RegisterForm.styled';
import { toast } from 'react-toastify';
import { useState } from 'react';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().min(6, 'Е-пошта мусить бути більше 6-ти символів').email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  password: Yup.string().min(8, 'Пароль мусить бути більше 8-ми цифр').required('Пароль обов\'язковий'),
});

function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(register(newUser));

    if (response.error) {
      toast.error("Щось пішло не так")
    } else {
      navigate('/');
      toast.success("Ви успішно зареєструвалися")
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={RegisterSchema}>
          <Content>
            <Menu>
              <StyledRegistrationLink href="register" underline="none">Реєстрація</StyledRegistrationLink>
              <StyledLink href="login" underline="none">Вхід</StyledLink>
            </Menu>
            <Inputs>
              <Field autoFocus name="name" type="text" placeholder="Ім'я" />
              <ErrorText name="name" component="div" />
              <Field name="email" type="email" placeholder="Е-пошта" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Пароль" />
                <ErrorText name="password" component="div" />
                <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <PasswordIcon icon={faEyeSlash} width="18px" />
                  ) : (
                    <PasswordIcon icon={faEye} width="18px" />
                  )}
                </PasswordToggle>
              </PasswordInput>
              <RegisterBtn type="submit">Зареєструватися</RegisterBtn>
              <ErrorText name="submit" component="div" />

              {/* <GoogleButton href="https://lata-project-backend.onrender.com/api/auth/google">
                <img height={25} width={25} alt="googleLogo" src={googleLogo} />
                Sign up with Google
              </GoogleButton> */}
            </Inputs>
          </Content>
        </Formik>
      </form>
    </Container>
  );
}

export default RegistrationPage;