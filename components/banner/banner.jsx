import React from 'react';
import styles from "../../styles/banner.module.css"
import {Button} from "antd";
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.image}>
                <div className={styles.overline}></div>
                <img src="./banner.jpg" alt=""/>
            </div>
            <div className={styles.info}>
                <h1>Դասընթացի սկիզբ Հուլիսի 1-ից</h1>
                <h4>Գրանցվեք հիմա և ձեռք բերեք զեղչեր</h4>
                <a href="tel:+37444777344">
                    <Button type='primary'>Զանագահարել</Button>
                </a>
            </div>
        </div>
    );
};

export default Banner;