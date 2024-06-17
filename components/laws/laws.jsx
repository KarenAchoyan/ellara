import React from 'react';
import styles from "../../styles/laws.module.css"
import Item from "@/components/laws/item";
const Laws = () => {
    return (
        <div className={styles.laws}>
            <h1>Օրենքներ</h1>
            <div className={styles.container}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    );
};

export default Laws;