import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import {
  ErrorText,
  Menu,
  Inputs,
  Container,
  PasswordInput,
  Content,
  LoginBtn,
  StyledRegistrationLink,
  StyledLink,
  PasswordToggle,
  PasswordIcon,
} from './LoginForm.styled';
import { setToken } from '../../redux/auth/authSelectors';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
});

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const currentUser = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(login(currentUser, setToken));

    if (response.error) {
      toast.error();
    } else {
      navigate('/');
      toast.success('Ви успішно залогінились')
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} >
          <Content>
            <Menu>
                <StyledRegistrationLink href="register" underline="none">Реєстрація</StyledRegistrationLink>
                <StyledLink href="login" underline="none">Вхід</StyledLink>
            </Menu>
            <Inputs>
              <Field autoFocus name="email" type="email" placeholder="Е-пошта" />
              <ErrorText name="email" component="div" />
              {/* <PasswordInput>
                <Field type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorText name="password" component="div" />
              </PasswordInput> */}


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



              <LoginBtn type="submit">Увійти</LoginBtn>
              <ErrorText name="submit" component="div" />
            </Inputs>
          </Content>
        </Formik>
      </form>
    </Container>
  );
}

export default LoginPage;