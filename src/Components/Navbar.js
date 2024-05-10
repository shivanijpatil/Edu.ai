import React from 'react';

const Navbar = () => {
  return (
   <div className="container">
  <nav className="navbar">
    <a className="navbar-brand" href="#">Logo</a>
    <form className="form-inline">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Settings</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav>
  <div className="sidebar">
    {/* Sidebar content goes here */}
  </div>
</div>

  );
}

export default Navbar;

