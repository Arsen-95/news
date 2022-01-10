import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
            <nav>
                <Link className={cl.nav__link} to="/TopStories">Top stories</Link>
                <Link className={cl.nav__link} to="/NewStories">New Stories</Link>
                <Link className={cl.nav__link} to="/BestStories">Best Stories</Link>
            </nav>
        </header>
    )
};

export default Header;
