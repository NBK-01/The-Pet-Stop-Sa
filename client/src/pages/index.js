import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar';
import About from '../components/heroView';
import MobileNav from '../components/mobileNav'
import {aboutObjOne} from '../components/heroView/data'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
    <MobileNav isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>

    <About {...aboutObjOne}/>
        </>
    )
}


export default Home;