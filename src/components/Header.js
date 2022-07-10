import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
    return(
        <div className='header'>
            <nav>
                <div className='logo'>
                    <Link to='/'>wonder·wondo</Link>
                </div>
                <ul className='ul-items'>
                    <li className='li-items'>
                        <Link to='/work'>WORK</Link>
                        <Link to='/blog'>BLOG</Link>
                        <Link to='/about'>ABOUT</Link>
                    </li>     
                </ul>
            </nav>
        </div>
    );
}

export default Header;