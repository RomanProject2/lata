import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    padding: 0 20px 20px 25px;
    position: relative;
    align-items: center;
`;

export const Title = styled.h2`
    color: #9AC43C;
    margin: 32px 0 32px 0;
    font-size: 42px;
    @media screen and (max-width: 780px) {
        line-height: 1.2em;
        font-size: 28px;
    }
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

export const Label = styled.label`
  width: 100px;
  color: #000;
`;

export const Input = styled(Field)`
    max-width: 300px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  @media screen and (min-width: 481px) {
    width: 300px;
  }
`;

export const Textarea = styled(Field)`
    max-width: 300px;
  height: 150px;
  padding: 8px;
  resize: none;
  user-select: text;
  border-radius: 4px;
  border: 1px solid #cccccc;
  @media screen and (min-width: 481px) {
    width: 300px;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  padding: 8px;
  background-color: #9AC43C;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 360px;
  border: 1px solid #cccccc;
  border-radius: 40px;
  padding: 20px 30px;
  word-wrap: break-word;
`;

export const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 12px;
  color: var(--createBoardInputTextFocus);
`;

export const BtnSend = styled.button`
    padding: 10px;
    background: red;
    border-radius: 50px;
    color: white;
`;

export const StarInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  color: gray;
  &:hover {
    color: gold; /* Hover color */
  }
`;

export const StarIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  color: gray; /* Icon color */
  font-size: 24px; /* Adjust size as needed */
  cursor: pointer;
  z-index: 1; /* Ensure the icon is above the radio button */

  &:hover {
    color: gold; /* Hover color */
  }
`;

export const HiddenRadio = styled.input`
  position: relative;
  opacity: 0; /* Hide the actual radio button */
  width: 24px; /* Match the size of the icon */
  height: 24px; /* Match the size of the icon */
  z-index: 2; /* Place the input below the icon */
`;

export const InputStar = styled.input`
  position: relative;
  right: 14px;
  top: 1px;
`;