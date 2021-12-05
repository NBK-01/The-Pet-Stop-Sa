import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarWrapper, NavLogo, IconMobile, NavItems, Item, NavLinks} from './NavEl';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav> 
                <NavbarWrapper>  
                    <NavLogo to='/'> Design Portfolio </NavLogo>
                    <IconMobile onClick={toggle}> 
                        <FaBars />   
                    </IconMobile>
                    <NavItems>
                        <Item>
                            <NavLinks to="about"> About us </NavLinks>
                        </Item>
                        <Item>
                            <NavLinks to="portfolio"> Find your pet </NavLinks>
                        </Item>
                        <Item>
                            <NavLinks to="portfolio"> Sign-in </NavLinks>
                        </Item>
                    </NavItems>
                    <NavBtn>
                        <SignUpLink> Sign Up </SignUpLink>
                    </NavBtn>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar