import React from 'react';

import {MobileNavCon, Icon, CloseIcon, MobileNavWrapper, MobileItems, MobileLinks} from './mobileEl'

const MobileNav = ({isOpen, toggle}) => {
    return (
        <MobileNavCon isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
            <CloseIcon />   
            </Icon> 
            <MobileNavWrapper>
                <MobileItems>
                    <MobileLinks> Sign-In </MobileLinks>
                    <MobileLinks> Sign-Up </MobileLinks>
                    <MobileLinks> About Us </MobileLinks>
                </MobileItems>
            </MobileNavWrapper>
        </MobileNavCon>
    )
}

export default MobileNav
