import React from 'react';
import styles from './Dashboard.module.css';
import {BarChart} from './../charts/BarChart'; // Assuming default export
import {PieChart} from './../charts/PieChart'; // Assuming default export
import {LinearGraph} from './../charts/LinearGraph'; // Assuming default export
import {BubbleChart} from './../charts/BubbleChart'; // Assuming default export
import {RadarChart} from './../charts/RadarChart'; // Assuming default export

export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={`${styles.chartContainer} ${styles.smallChartContainer}`}>
                <BarChart />
            </div>
            <div className={`${styles.chartContainer} ${styles.smallChartContainer}`}>
                <LinearGraph />
            </div>
            <div className={`${styles.chartContainer} ${styles.smallChartContainer}`}>
            <PieChart />
            </div>
            <div className={`${styles.chartContainer} ${styles.smallChartContainer}`}>
                <RadarChart />
            </div>
        </div>
    );
};