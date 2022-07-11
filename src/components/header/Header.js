import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Button from '../ui/button/Button';

const Header = () => {
    return(
        <div className='header'>
            <nav>
                <div className='logo'>
                    <Link to='/'>wonder·wondo</Link>
                </div>
                <ul className='ul-items'>
                    <li className='li-items'>
                        <Link to='/work'><Button variant='default' size='lg'>WORK</Button></Link>
                        <Link to='/blog'><Button variant='default' size='lg'>BLOG</Button></Link>
                        <Link to='/about'><Button variant='default' size='lg'>ABOUT</Button></Link>
                    </li>     
                </ul>
            </nav>
        </div>
    );
}

export default Header;