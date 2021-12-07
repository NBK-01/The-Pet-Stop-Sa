import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarWrapper, NavLogo, IconMobile, NavItems, Item, NavLinks, NavBtn, SignUpLink, SignInLink} from './NavEl';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav> 
                <NavbarWrapper>  
                    <NavLogo to='/'> the pet stop </NavLogo>
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
                    </NavItems>
                    <NavBtn>
                        <SignInLink to='/signin'> Sign In </SignInLink>
                        <SignUpLink to='/signup'> Sign Up </SignUpLink>
                    </NavBtn>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar

