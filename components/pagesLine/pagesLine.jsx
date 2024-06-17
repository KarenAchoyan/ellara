import React from 'react';
import styles from "../../styles/pagesLine.module.css"
const PagesLine = ({text}) => {
    return (
        <div className={styles.page}>
            <h1>{text}</h1>
        </div>
    );
};

export default PagesLine;