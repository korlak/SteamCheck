import React, { useState, useEffect } from 'react';

import "./header.css"
import { Link } from 'react-router-dom';

function Header() {

  const [film, setFilm] = useState(false)

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo"><Link to="/">PerfectRuns</Link></div>
        <nav>
          <ul>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/account">Profile</Link></li>
            <li><Link to="/auth/register">Register</Link></li>
            <li><Link to="/auth/login">Login</Link></li>
            <li><Link to="/auth/klosfvhjnofhikno">Login</Link></li>
          </ul>
        </nav>
            <button onClick={setFilm(true)}>Films</button>
      </div>
    </header>
  );
}

export default Header;