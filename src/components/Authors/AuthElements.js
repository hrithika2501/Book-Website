import styled from "styled-components";

export const AuthorsContainer = styled.div `
margin-top: 5em;
width: 100vw;
min-height: 100vh;
padding: 5rem calc((100vw-1300px)/2);
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

`

export const Head=styled.div`
width: 60%;
`;

export const AuthHeading=styled.h1 `
font-size: clamp(2.5rem, 10vw, 2.5rem);
text-align: center;
margin-bottom: 1.5rem;
color: #000;
font-family: 'Inter', sans-serif;
font-weight: 600;
`

export const AuthPara=styled.p `
font-size: clamp(2rem, 2.5vw, 2.5rem);
font-family: 'Cormorant Garamond', serif;
color: #555555;
text-align: center;
font-weight: 500;
`;

export const AuthWrapper=styled.div `
width: 90%;
height: 55vh;
display: flex;
justify-content: space-around;
align-items: flex-start;

`
export const AuthCard = styled.div `
margin: 0 2rem;
line-height: 2;
width: 200px;

`
export const AuthImg = styled.img `
height: 180px;
min-width: 90px;
max-width: 100%;
padding-left: 0.5em;

`

export const AuthTitle=styled.h2 `
font-weight: 600;
font-size: 1rem;
font-family: 'Inter', sans-serif;
color: #999999;
text-align: center;
`
