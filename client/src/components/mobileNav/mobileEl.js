import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';


export const MobileNavCon = styled.aside`
position:fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #000;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const MobileNavWrapper = styled.div`
color: #fff;
`;


export const MobileItems = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 210px);
text-align: center;



@media screen and (max-width: 500px){
    grid-template-rows: repeat(3, 100px);
}
`

export const MobileLinks = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.3s ease-in-out;
color: #fff;
margin-bottom: 50px;
&:hover{
    color: red;
    transition: 0.3s ease-in-out;
}
`
