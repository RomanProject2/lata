import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const GeneralContainer = styled.div`
    background: #fff;
    padding: 20px 0;
`;

export const MiddleContainer = styled.div`
    display: flex;
    margin: 0 55px 0 45px;
    gap: 20px;
    @media screen and (max-width: 780px) {
        flex-direction: column;
    }
`;

export const Svg = styled(FontAwesomeIcon)`
    cursor: pointer;
    width: 25px; 
    height: 25px; 
    padding: 20px; 
    font-size: 30px; 
    line-height: 40px; 
    color: white; 
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
    background: var(--bg-color, #9AC43C);
`;

export const ContainerDiv = styled.div`
    text-align: center;
    margin-bottom: 10px;

    &:hover {
        transform: scale(1.02);
        --bg-color: rgba(0, 0, 0, 0.75);
    }
`;

export const ContainerH6 = styled.h6`
    margin-bottom: 20px;
    font-size: 22px;
    line-height: 1.5em;
`;

export const ContainerP = styled.p`
    margin: 0 0 10px
`;

export const ContainerA = styled(Link)`
    color: #9AC43C;
    &:hover {
        border-bottom: 1px solid #9AC43C;
    }
`;

export const ContainerSpan = styled.span`
    font-family: Arial, sans-serif;
    font-size: 16px;
    background-color: rgb(255, 255, 255);
    font-weight: 300;
`;

export const AnimatedContainer = styled.div`
    transition: opacity 300ms ease-in;
`;