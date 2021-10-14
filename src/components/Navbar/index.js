import React from 'react'
import {Nav, Left, Logo, NavLinks, Right, NavMenuLink} from './NavElements'

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <Logo></Logo>
                <NavLinks to='/'>HOME</NavLinks>
                <NavLinks to=''>ABOUT</NavLinks>
                <NavLinks to=''>CONTACT</NavLinks>
            </Left>
            <Right>
                <NavMenuLink to=''>JOIN US</NavMenuLink>
            </Right>
            
        </Nav>
    )
}

export default Navbar
