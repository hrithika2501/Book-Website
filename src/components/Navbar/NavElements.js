
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import Logos from '../../images/logo.png'


export const Nav = styled.nav`
    background: transparent;
    height: 80 px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
`;

export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 3em;
    @media screen and (max-width: 430px){
     margin-left: 1.5em;

    }
`;

export const Logo = styled.div`

    width: 100px;
    height: 80px;
    background: url(${Logos}) no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 430px){
     width: 90px;
     height: 70px;

    }
    
`;

export const NavLinks = styled (Link) `
    color: #A09797;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    padding-left: 3em;

    &.active {
        color: #000000;
    }
    @media screen and (max-width: 768px){
     display: none;

    }
`;

export const Right = styled.div`
display: flex;
    
    align-items: center;
    margin-right: 4em;
`;

export const NavMenuLink = styled (Link) `
    color: #000000;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    @media screen and (max-width: 768px){
     display: none;

    }
`;

export const MobileIcon = styled.div `
display: none;
@media screen and (max-width: 768px){
     
display: block;
position: absolute;
top:0;
right:0;
cursor:pointer;
transform: translate(-100%, 60%);
font-size: 1.8rem;
color: #000;
}
`;

