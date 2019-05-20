import React from 'react'
import styles from './Header.module.scss';

export const Header = () => (
    <div>
        <div className={styles.headerContainer}>
            <div className={styles.logo}></div>
        </div>
        <div className={styles.menuContainer}>
            <div className={styles.menuItems}>
                <div>Films</div>
                <div>People</div>
                <div>Planets</div>
                <div>Species</div>
                <div>Startships</div>
                <div>Vehicles</div>
            </div>
        </div>
    </div>
   
);