import React from 'react';
import styles from "../../styles/service.module.css"
import Item from "@/components/service/item";
import App from "@/components/layouts/app";
const Index = () => {
    return (
        <App>
            <div className={styles.serviceContainer}>
                <h1>Ծառայություներ</h1>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Index;