// import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';

// // export const MiddleContainer = styled.section`
// //     // height: 388px;
// //     // max-width: 1230px;
// //     // overflow: hidden;
// //     // margin: 0 auto;
// //     // padding: 0;
// //     // background: #fff;
// //     // position: relative;



// //     // padding: 200px 0;
// //     // background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(../images/hero/slider-image-one.jpg);
// //     background-repeat: no-repeat;
// //     background-size: cover;
// //     color: var(--color);




// //     @media screen and (max-width: 780px) {
// //         max-height: 240px;
// //     }
// //     @media screen and (max-width: 480px) {
// //         display: flex;
// //         height: 140px;
// //         align-items: center;
// //     }
// // `;

// // export const Image = styled.img`
// //     display: inline;
// //     max-width: 100%;
// //     height: auto;
// //     position: absolute;
// //     transition: opacity 0.5s ease-in-out;
// // `;

// // export const LeftDiv = styled.div`
// //     // position: absolute;
// //     // display: block;
// //     border-bottom: #9AC43C 5px solid;
// //     // left: 80px;
// //     // bottom: 20px;
// //     background: #000;
// //     color: #fff;
// //     max-width: 30%;
// //     padding: 20px;
// //     opacity: 0.8;
// //     overflow: hidden;
// //     filter: alpha(opacity=8);
// //     box-sizing: border-box;
// //     @media screen and (max-width: 780px) {
// //         max-width: 100%;
// //         max-height: 100%;
// //         left: 0px;
// //         top: 0px;
// //         bottom: 0;
// //         right: 0;
// //         opacity: 1;
// //         color: #000;
// //         background: none;
// //     }
// //     @media screen and (max-width: 480px) {
// //         padding: 20px 20px 20px 50px;
// //     }
// // `;



// // export const MiddleContainer = styled.section`
// //     position: relative;
// //     background-repeat: no-repeat;
// //     background-size: cover;
// //     padding: 120px 0px 20px 80px;
// //     @media screen and (max-width: 780px) {
// //         max-height: 240px;
// //     }
// //     @media screen and (max-width: 480px) {
// //         display: flex;
// //         height: 140px;
// //         align-items: center;
// //     }
// // `;

// export const MiddleContainer = styled.section`
//     position: relative;
//     background-size: cover;
//     padding: 120px 0px 20px 80px;
//     transition: background-image 0.5s ease-in-out;
// `;

// export const Image = styled.img`
//     display: inline;
//     max-width: 100%;
//     height: auto;
//     position: absolute;
//     transition: opacity 0.5s ease-in-out;
//     width: 100%; /* Додаємо ширину для відображення фотографій */
//     opacity: 0;
//     z-index: 1; /* Змінюємо індекс накладання для відображення фотографій */
// `;

// export const LeftDiv = styled.div`
//     border-bottom: #9AC43C 5px solid;
//     background: #000;
//     color: #fff;
//     max-width: 30%;
//     padding: 20px;
//     opacity: 0.8;
//     overflow: hidden;
//     filter: alpha(opacity=8);
//     box-sizing: border-box;
//     @media screen and (max-width: 780px) {
//         max-width: 100%;
//         max-height: 100%;
//         left: 0px;
//         top: 0px;
//         bottom: 0;
//         right: 0;
//         opacity: 1;
//         color: #000;
//         background: none;
//     }
//     @media screen and (max-width: 480px) {
//         padding: 20px 20px 20px 50px;
//     }
// `;

// export const Title = styled.h2`
//    font-size: 26px;
//     line-height: 1em;
//     margin-bottom: 22px;
//     color: #fff;
// `;

// export const P = styled.p`
//    margin-bottom: 20px;
//    line-height: 1.6em;
//    color: #fff;
//    @media screen and (max-width: 480px) {
//     display: none;
// }
// `;

// export const A = styled(Link)`
//     font-size: 12px;
//     text-transform: uppercase;
//     color: #fff;
//     text-shadow: none;
//     background-image: none;
//     border-color: none;
//     border-bottom-color: none;
//     box-shadow: none;
//     background: #9AC43C;
//     padding: 4px 12px;
//     border-radius: 2px;
//     &:hover {
//         background: #737373;
//         color: #fff;
//     }
// `;

// export const Arrow = styled(FontAwesomeIcon)`
//     position: absolute;
//     top: 50%;
//     translateY(-50%); 
//     width: 30px; 
//     height: 30px;
//     background: #fff;
//     padding: 5px;
//     border-radius: 50%;
//     color: #9AC43C; 
//     // font-size: 24px; 
//     display: flex; 
//     justify-content: center; 
//     align-items: center; 
//     cursor: pointer;
//     ${({ direction }) => direction === 'left' && 'left: 10px;'} ${({ direction }) => direction === 'right' && 'right: 10px;'}
//     @media screen and (max-width: 780px) {
//         width: 20px;
//         height: 20px;
//     }
// `;


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