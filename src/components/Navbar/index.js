import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, Left, Logo, NavLinks, Right, NavMenuLink, MobileIcon} from './NavElements'

const Navbar = ({toggle}) => {
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
            <MobileIcon onClick={toggle}>
                    
                    <FaBars />
                </MobileIcon>
            
        </Nav>
    )
}

export default Navbar
