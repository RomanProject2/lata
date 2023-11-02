import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  Form,
  InputWrapper,
  Label,
  Input,
  BtnSend,
  Textarea,
  SubmitButton,
  Review,
  Style,
  ErrorText,
} from './Reviews.styled';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Formik } from 'formik';

const ReviewSchema = Yup.object().shape({
  rating: Yup.string().required('Рейтинг обов\'язковий'),
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().min(6, 'Е-пошта мусить бути більше 6-ти символів').email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  message: Yup.string().required('Коментар обов\'язковий'),
});

const Reviews = () => {
  const navigate = useNavigate();
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

  const handleRegisterRedirect = () => {
    if (!isLoggedInUser) {
      navigate('/auth/register');
      toast.error('Ви не можете залишити відгук поки не зареєструєтесь або не залогінетесь')
    }
  };

  const [reviews, setReviews] = useState([]);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      setReviews(response.data);
    } catch (error) {
      toast.error('Error fetching reviews:', error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`/api/reviews/${id}`);
      fetchReviews();
    } catch (error) {
      toast.error('Ви не можете видалити чужий відгук')
    }
  };

  const StarRating = ({ rating }) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    const starStyles = {
      fontSize: '24px', // Розмір зірок можна налаштувати
      color: 'gold',   // Колір заповнених зірок
    };

    return <span style={starStyles}>{filledStars}{emptyStars}</span>;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await ReviewSchema.validate(values, { abortEarly: false });
      await axios.post('/api/reviews', values);
      setSubmitting(false);
      fetchReviews();
      toast.success('Ваш відгук був успішно доданий');
    } catch (error) {
      console.error('Під час додавання відгука сталася помилка:', error);
      toast.error('Під час додавання відгука сталася помилка');
    }
  };

  return (
    <>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
          <Title>Залишити відгук</Title>
        </div>
        <Formik initialValues={{ name: '', email: '', message: '', rating: '' }} validationSchema={ReviewSchema} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange, handleBlur, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div>
              <InputWrapper style={{ marginBottom: '15px' }}>
                <Label>Рейтинг:</Label>
                <select name="rating" onChange={handleChange} onBlur={handleBlur} value={values.rating}>
                  <option value="1" label="1 зірка" />
                  <option value="2" label="2 зірки" />
                  <option value="3" label="3 зірки" />
                  <option value="4" label="4 зірки" />
                  <option value="5" label="5 зірок" />
                </select>
              </InputWrapper>
              <ErrorText name="rating" component="div" className="error-message" />
                <InputWrapper>
                  <Label>Ім'я:</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ім'я"
                  />
                </InputWrapper>
                <ErrorText name="name" component="div" className="error-message" />
              </div>
              <div>
                <InputWrapper>
                  <Label>Е-пошта:</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Е-пошта"
                  />
                </InputWrapper>
                <ErrorText name="email" component="div" className="error-message" />
              </div>
              <div>
                <InputWrapper>
                  <Label>Коментар:</Label>
                  <Textarea
                    name="message"
                    placeholder="Залиште свій коментар"
                    as="textarea"
                  />
                </InputWrapper>
                <ErrorText name="message" component="div" className="error-message" />
              </div>
              <SubmitButton type="submit" onClick={handleRegisterRedirect} disabled={isSubmitting}>Надіслати</SubmitButton>
            </Form>
          )}
        </Formik>
      </Container>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
          <Title>Відгуки про нас</Title>
        </div>
          <Style>
            {reviews.map((review, index) => (
              <Review key={index}>
                  <p style={{ margin: '0px' }}><StarRating rating={review.rating} /></p>
                  <h2 style={{ margin: '0px' }}>Ім'я: {review.name}</h2>
                  <p style={{ margin: '0px' }}>Коментар: {review.comment || review.message}</p>
                  {isLoggedInUser && (
                    <BtnSend onClick={() => handleDeleteReview(review._id)}>Delete</BtnSend>
                  )}
              </Review>
            ))}
          </Style>
      </Container>
    </>
  );
};

export default Reviews;