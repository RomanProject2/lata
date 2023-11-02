import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background: #fff;
    @media screen and (max-width: 780px) {
        flex-direction: column;
        padding: 20px 20px;
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
    display: flex;
    gap: 40px;
    flex-direction: column;
    @media screen and (max-width: 780px) {
        width: 100%;
        margin-left: 0;
    }
`;

export const ContainerH3 = styled.h3`
    margin-bottom: 20px;
    font-size: 34px;
    line-height: 1.5em;
    margin-top: 0;
`;

export const ContainerH5 = styled.h5`
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.5em;
    color: #486DAA;
    font-weight: 300;
    margin-top: 0;
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
    color: #9AC43C;
`;

export const ContainerA = styled(Link)`
  color: #9AC43C;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 1px solid #9AC43C;
    }
`;

export const ContainerP = styled.p`
    text-align: justify;
`;

export const ContainerDivService = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`;

export const ContainerImgService = styled.img`
    margin: 0 15px 0 0;
    @media screen and (min-width: 480px) {
        max-width: 200px;
        max-height: 158px;
    }
    @media screen and (max-width: 480px) {
        margin: 0 0 15px 0;
    }
`;
