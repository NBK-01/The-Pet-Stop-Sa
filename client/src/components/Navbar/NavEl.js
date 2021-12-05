import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav `

background: transparent;
height: 75%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;


@media screen and (max-width: 960px){
    transition: 1s all ease;
}
`;


export const NavbarWrapper = styled.div`

display:flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1600px;

`;


export const NavLogo = styled(LinkS)`
color: #000;
justify-self: flex-start;
cursor: pointer; 
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
`;

export const IconMobile = styled.div`
display: none;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer; 
}
`;

export const NavItems = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:768px){
    display: none;
}
`;


export const Item = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 3px dashed red;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px){
    display: none;
}
`


export const SignUpLink = styled(LinkR)`
background: red;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 18px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
`
