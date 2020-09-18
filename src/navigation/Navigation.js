import React from 'react';
import logo from '../logo/Logo.png'
import '../css/Navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink to="/"><img className="logo" alt="logo green" src={logo}/></NavLink>
            <div><NavLink className="link" to="/contact">Contact</NavLink></div>
            <div><NavLink className="link" to="/about">About us</NavLink></div>
            <div><NavLink className="link" to="/trails">All trails</NavLink></div>
        </div>
    );
}

export default Navigation;