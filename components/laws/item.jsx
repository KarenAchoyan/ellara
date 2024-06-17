import React from 'react';
import styles from "@/styles/laws.module.css";

const Item = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemAvatar}>
                <img src="./banner.jpg" alt=""/>
            </div>
            <div className={styles.info}>
                <h3>Օրնեք ֆլանի մասին</h3>
            </div>
        </div>
    );
};

export default Item;