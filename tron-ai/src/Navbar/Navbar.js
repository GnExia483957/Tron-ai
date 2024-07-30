import React from 'react';
import './Navbar.css';
import logo2 from '../Images/TronIcon.png'



function Navbar() {
    return (
        <div class="nav">
            <img src={logo2} className="App-logo" alt="logo" />
            <div>Tron.ai</div>
        </div>
);
  }

export default Navbar;
