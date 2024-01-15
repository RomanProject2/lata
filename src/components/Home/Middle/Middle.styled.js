import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// export const MiddleContainer = styled.section`
//     position: relative;
//     background-size: cover;
//     padding: 120px 0px 20px 80px;
//     transition: background-image 0.5s ease-in-out;
// `;

export const MiddleContainer = styled.section`
    position: relative;
    background-size: 100% 100%;
    padding: 160px 0px 40px 80px;
    transition: background-image 0.5s ease-in-out;

    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 780px) {
        padding: 0px 40px;
        border-bottom: #9AC43C 5px solid;
    }
    @media screen and (max-width: 480px) {
        padding: 0px 40px;
        border-bottom: #9AC43C 5px solid;
    }
`;

export const LeftDiv = styled.div`
    border-bottom: #9AC43C 5px solid;
    background: #000;
    color: #fff;
    max-width: 40%;
    padding: 20px;
    opacity: 0.8;
    box-sizing: border-box;
    @media screen and (max-width: 780px) {
        max-width: 100%;
        max-height: 100%;
        opacity: 1;
        color: #000;
        background: none;
        border-bottom: none;
    }
`;

export const Title = styled.h2`
   font-size: 26px;
    line-height: 1em;
    margin-bottom: 22px;
    color: #fff;
`;

export const P = styled.p`
   margin-bottom: 20px;
   line-height: 1.6em;
   color: #fff;
   @media screen and (max-width: 480px) {
    display: none;
}
`;

export const A = styled(Link)`
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: none;
    background-image: none;
    border-color: none;
    border-bottom-color: none;
    box-shadow: none;
    background: #9AC43C;
    padding: 4px 12px;
    border-radius: 2px;

    transition: background 0.2s ease-in;
    &:hover {
        background: #737373;
        color: #fff;
    }
`;

export const Arrow = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    translateY(-50%); 
    width: 30px; 
    height: 30px;
    background: #fff;
    padding: 5px;
    border-radius: 50%;
    color: #9AC43C; 
    // font-size: 24px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    cursor: pointer;
    ${({ direction }) => direction === 'left' && 'left: 10px;'} ${({ direction }) => direction === 'right' && 'right: 10px;'}
    @media screen and (max-width: 780px) {
        width: 20px;
        height: 20px;
    }
`;