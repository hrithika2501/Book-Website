
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
`;

export const Logo = styled.div`

    width: 100px;
    height: 80px;
    background: url(${Logos}) no-repeat;
    background-size: cover;
    background-position: center;
    
`;

export const NavLinks = styled (Link) `
    color: #A09797;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    padding-left: 3em;

    &:active {
        color: #000000;
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
`;