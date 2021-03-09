import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <ul className="navbar-nav nav-pills">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Mitchell Foley</Link>
            </li>
        </ul>

        <ul className="navbar-nav ml-auto"> 
            <li className="nav-item px-3">
                <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item px-3">
                <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item px-3">
                <Link className="nav-link" to="/weather">Weather</Link>
            </li>
        </ul>
    </nav>
    
  );
};

export default Navigation;