import React from 'react';
import styles from "../../styles/service.module.css"
import Link from "next/link";
import PagesLine from "@/components/pagesLine/pagesLine";

const Service = () => {
    return (

        <div className={styles.service}>



            <h1>Ծառայություններ</h1>
            <div className={styles.container}>
                <div className={styles.section}>

                    <Link href='/services'>


                        <div className={styles.service1}>
                             {/*<img src="./banner2.jpg" alt=""/>*/}
                        </div>
                        <div className={styles.text}>
                            <h3>Հաշվապահական ծառայություններ</h3>
                        </div>
                    </Link>
                </div>
                <div className={styles.section}>

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