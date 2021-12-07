import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarWrapper, NavLogo, IconMobile, NavItems, Item, NavLinks, NavBtn, SignUpLink, SignInLink} from './NavEl';

import Auth from '../../utils/auth';

const Navbar = ({toggle}) => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    }
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
                        {Auth.loggedIn() ? (
                            <>
                            <SignInLink onClick={logout}> Logout </SignInLink>
                            <SignUpLink> Post a Listing </SignUpLink>
                            </>
                        ) : (
                            <>
                        <SignInLink to='/signin'> Sign In </SignInLink>
                        <SignUpLink to='/signup'> Sign Up </SignUpLink>
                        </>
                        )}
                    </NavBtn>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar

