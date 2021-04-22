import React from 'react';
import moment from 'moment';
import './Navbar.css';
import Logo from '../../assets/logo/bareksa-logo@3x.png';
import Dropdown from '../../assets/chevron-down.svg';
import Search from '../../assets/search.svg';
import Notification from '../../assets/bell.svg';
import Options from '../../assets/gear.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='top-menu'>
        <div className='left'>
          <div className='logo'>
            <img src={Logo} alt='brand-logo' />
          </div>
          <div className='user-data'>
            <div className='circle'></div>
            <h1 className='initial'>RH</h1>
            <div className='caption-label'>
              <h1>Reinhart H.</h1>
              <p>Kemang, Jakarta</p>
              <img src={Dropdown} alt='dropdown' />
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='search-input'>
            <input placeholder='Search Text' type='text' />
            <img className='search' src={Search} alt='search' />
          </div>
          <img className='notification' src={Notification} alt='notification' />
          <img className='options' src={Options} alt='options' />
        </div>
      </div>
      <div className='sub-menu'>
        <p>{moment().format('D MMMM YYYY')}</p>
      </div>
    </nav>
  );
};

export default Navbar;
