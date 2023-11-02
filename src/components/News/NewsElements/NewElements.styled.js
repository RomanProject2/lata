import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background: #fff;
    @media screen and (max-width: 780px) {
        flex-direction: column;
    }
`;

export const LeftSideBar = styled.div`
    max-width: 770px;
    @media screen and (max-width: 780px) {
        margin-bottom: 40px;
    }
`;


export const RightSideBar = styled.div`
    width: 370px;
    margin-left: 25px;
    @media screen and (max-width: 780px) {
        width: 100%;
        margin-left: 0;
    }
`;

export const ContainerDiv = styled.div`
    border-left: 1px solid #e9e9e9;
    padding: 0 0 0 30px;
    @media screen and (max-width: 780px) {
        border-left: none;
        padding: 0 0;
    }
`;

export const News = styled.h5`
    border-bottom: #e9e9e9 1px solid;
    padding-bottom: 9px;
    margin-bottom: 20px;
    font-size: 24px;
`;

export const ContainerTitle = styled.div`
    margin-bottom: 10px;
`;

export const ContainerA = styled(Link)`
  color: #9AC43C;
  &:hover {
    border-bottom: 1px solid #9AC43C;
    }
`;

export const ContainerP = styled.p`
    font-family: Arial, sans-serif;
`;

export const ContainerNew = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    }
`;

export const ContainerH5 = styled.h5`
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.5em;
    font-weight: 300;
    margin-top: 0;
`;

export const Img = styled.img`
  margin-right: 15px;
  max-width: 100%;
  height: auto;
`;

export const TextContainer = styled.div`
  @media screen and (max-width: 780px) {
    flex-basis: 50%;
  }
`;

export const Text = styled.p`
  text-align: justify;
  @media screen and (max-width: 780px) {
    flex-basis: 100%;
  }
`;

export const ContainerAButton = styled.a`
    text-decoration: none;
    background-color: #9AC43C;
    border-radius: 5px;
    color: #000;
    padding: 6px 12px;
    &:hover {
        background: #656565;
        color: #fff;
    }
`;

