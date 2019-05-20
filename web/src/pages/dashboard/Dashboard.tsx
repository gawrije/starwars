import React from 'react'
import styles from './Dashboard.module.scss';


export const Dashboard = () => (
    <>
        <div className={styles.dashboardContainer}>
            <div>Films</div>
            <div>People</div>
            <div>Planets</div>
            <div>Species</div>
            <div>Startships</div>
            <div>Vehicles</div>
        </div>
    </>
); 