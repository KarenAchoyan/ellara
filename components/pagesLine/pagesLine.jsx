import React from 'react';
import styles from "../../styles/pagesLine.module.css"
const PagesLine = ({text}) => {
    return (
        <div className={styles.page}>
            <div className={styles.overline}>
                <h1>{text}</h1>
            </div>
        </div>
    );
};

export default PagesLine;