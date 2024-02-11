import React from 'react';

export const Navbar = () => {
  return (
    <div className="nav">
      <div className='namess'>
        <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="Logo" />
      </div>
      <ul className="navunder">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Location</a></li>
        <li className="nav-items"><a href="#">Logout</a></li>
        <button className='acc'>My Account</button>
      </ul>
      
    </div>
  );
};
