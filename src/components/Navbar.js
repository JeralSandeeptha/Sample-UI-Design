import React from 'react'
import '../styles/Navbar/navbar.css';
import logo from '../images/default-logo.png';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import gsap from 'gsap';

function Navbar() {

    const navClose = () => {
        let tl = gsap.timeline();
        tl.to('.nav-links', {duration: 1, x: '-100%'});
        tl.play(0, true);
    }

    const navOpen = () => {
        let tl = gsap.timeline();
        tl.to('.nav-links', {duration: 1, x: 0});
        tl.play(0, true);
    }

  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='nav-links'>
            <CloseIcon onClick={navClose} color='action' className='close'/>
            <NavLink className='link' to='/'><h5>HOME</h5></NavLink>
            <NavLink className='link' to='/about'><h5>ABOUT</h5></NavLink>
            <NavLink className='link' to='/contact'><h5>CONTACT</h5></NavLink>
        </div>
        <MenuIcon onClick={navOpen} className='menu'/>
      </div>
    </div>
  )
}

export default Navbar
