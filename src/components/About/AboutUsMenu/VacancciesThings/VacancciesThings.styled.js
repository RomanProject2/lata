import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  padding: 30px 20px;
  justify-content: space-between;
  @media screen and (max-width: 780px) {
    flex-direction: column;
}
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 170px;
  gap: 5px;
  margin-bottom: 40px;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 781px) {
    width: 770px;
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

export const ContainerA = styled(Link)`
  color: #9AC43C;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 1px solid #9AC43C;
    }
`;

export const ContainerTitle = styled.div`
    margin-bottom: 10px;
`;

export const ContainerAActive = styled(Link)`
  color: #909090;
  font-weight: bold;
  margin-bottom: 10px;
`;