import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

export function Header() {
    return (
        <div className="header-container">
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/shop'>SHOP</Link>
                
            </nav>
        </div>
    )
}

