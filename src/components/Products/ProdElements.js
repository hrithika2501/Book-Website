import styled from "styled-components";


export const Nav = styled.nav `
/* height: 80px; */
margin-top: 3em;
/* display: flex; */
/* justify-content: space-between; */
/* padding: 2rem 3rem; */
/* z-index:100; */
width: 100vw;
`;

export const NavMenu = styled.div `
display: flex;
align-items: center;
justify-content: space-around; 
margin: 0 6em;
/* width: 80%; */
height: 100%;
`;


export const NavLinkWrapper = styled.div `

/* height: 60px; */


`
export const NavBtn = styled.button `
color: #000;
display: flex;
align-items: center;
padding: 1rem 2rem; 
height: 100%;
cursor: pointer;
text-decoration: none;
font-family: 'Inter', sans-serif;
font-weight: 700;
background-color: #fff;
border: 0.1px solid #A09797;
font-size: 1rem;





&:active {
    background-color: #000;
    color: #fff;
    


}


`;


