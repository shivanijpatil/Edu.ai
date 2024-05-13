import React from 'react';
import Logo from "./Assets/img1.png";
import { motion } from 'framer-motion';



const Navbar = () => {
  const navigate = (path) => {
    window.location.href = path;
  }
  return (
    <div className="container_Navbar">
      <nav className="navbar">
        <div>
          <a className="navbar-brand" href='Logo'>
            <img src={Logo} className='logo' alt="Logo" />
          </a>
          {/* <img src="img1" alt="img1"></img> */}
        </div>
        <form className="form-inline">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul className="navbar-nav">
          <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/Result')}>Result</a>
          <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>Tickets</a>
          <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>Profile </a>
          <a className='align-items' style={{ color: 'beige' }} href="#" onClick={() => navigate('/')}>Log out</a>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
