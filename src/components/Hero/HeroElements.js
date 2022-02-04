import styled from "styled-components";
import ImgBg from '../../images/bg.png'

export const HeroContainer = styled.div `
background-color: #F3EADC;
height: 100vh;
`;

export const HeroContent = styled.div `
height: calc(100vh-80px);
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw-1300px)/2);
display: flex;
justify-content: space-around;
align-items: center;
@media screen and (max-width: 768px){
    /* justify-content: center; */

    }
`;

export const HeroItems = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100% ;
padding: 0 2rem;
width: 650px;
color: #000;
line-height: 1;
margin-bottom: 3rem;
@media screen and (max-width: 768px){
    /* width: 600px; */
    align-items: center;

    }
`;

export const HeroH1 = styled.h1 `
font-family: 'Cormorant Garamond', serif;
font-size: clamp(2.5rem, 10vw, 4rem);
margin-bottom: 1rem;
color: #000;
font-weight: 600;
`;

export const HeroP = styled.p `
font-family: 'Cormorant Garamond', serif;
font-size: clamp(2rem, 2.5vw, 2.5rem);
margin-left: 0.3em;
margin-bottom: 3rem;
color: #555555;
font-weight: 500;
@media screen and (max-width: 768px){
    text-align: center;

    }
`;

export const HeroBtn = styled.button `
font-size: 1.2rem;
padding: 1rem 3rem;
border: none;
background: #D14031;
font-family: 'Inter', sans-serif;
color: #fff;
transition: 0.2s ease-out;
margin-left: 0.5em;
font-weight: 600;

&:hover {
    background: #B41606;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`;

export const HeroImg = styled.div `
width: 405px;
height: 458px;
background: url(${ImgBg}) no-repeat;
background-size: cover;
background-position: center;
margin-bottom: 4rem;
@media screen and (max-width: 768px){
    display: none;

    }
`;