import styled from "styled-components";
import ImgBg from '../../images/down.png'

export const Container=  styled.div`
margin-top: 10em;
background: url(${ImgBg});
height: 50vh;
background-position: center;
background-size: cover;
display:flex;
justify-content: center;
`;

export const Items=  styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 2em;
color: #fff;
line-height: 1;
max-height: 100% ;
text-align: center;
width: 60%;
`;

export const H1=  styled.h1`
font-family: 'Inter', sans-serif;
font-size: clamp(2.5rem, 10vw, 2.5rem);
margin-bottom: 1rem;
font-weight: 600;
`;

export const P=  styled.p`
font-family: 'Cormorant Garamond', serif;
font-size: clamp(2rem, 2.5vw, 2.5rem);
/* margin-left: 0.3em; */
margin-bottom: 3rem;
font-weight: 500;
`;

export const Btn=  styled.button`
font-size: 1rem;
padding: 1rem 1rem;
border: none;
background: transparent;
font-family: 'Inter', sans-serif;
color: #fff;
transition: 0.2s ease-out;
margin-left: 0.5em;
font-weight: 600;
width: 25%;
border: 1px solid white;


&:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}

@media screen and (max-width: 768px){
    font-size: 0.8rem;

    }
    @media screen and (max-width: 430px){
    font-size: 0.8rem;
    padding: 0.8rem 0.8rem;
    width: 45%;

    }
`;