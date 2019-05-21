import React from 'react'
import  { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => (
    <div>
        <div className={styles.headerContainer}>
            <div className={styles.logo}></div>
        </div>
        <div className={styles.menuContainer}>
            <div className={styles.menuItems}>
                <div><Link to={'/films/'}>Films</Link></div>
                <div><Link to={'/people/'}>People</Link></div>
                <div><Link to={'/planets/'}>Planets</Link></div>
                <div><Link to={'/species/'}>Species</Link></div>
                <div><Link to={'/starships/'}>Starships</Link></div>
                <div><Link to={'/vehicles/'}>Vehicles</Link></div>
            </div>
        </div>
    </div>
   
);