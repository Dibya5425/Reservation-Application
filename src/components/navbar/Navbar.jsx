import React from 'react';
import logo from '../navbar/logo3.png';
import './navbar.css';
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className="logo" alt='logo'/>
      <div className='navContainer'>
        <span className='logo1'><b>Booking</b>
          <div className='logo2Box'>
            <b className='logo2'>hub</b>
          </div>
        </span>   
        <div className='navItems'>
          <button className='navButton'>register</button>
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  )
} 

export default NavBar;