import React from 'react';
import styles from "../../styles/service.module.css"
import Link from "next/link";

const Service = () => {
    return (
        <div className={styles.service}>
            <h1>Ծառայություններ</h1>
            <div className={styles.container}>
                <div className={styles.section}>
                    <img src="./banner.jpg" alt=""/>
                    <Link href='/services'>
                        <div className={styles.text}>
                            <h3>Հաշվապահական ծառայություններ</h3>
                        </div>
                    </Link>
                </div>
                <div className={styles.section}>
                    <img src="./banner.jpg" alt=""/>
                    <Link href='/lessons'>
                        <div className={styles.text}>
                            <h3>Հաշվապահական դասընթացներ</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;