import React from 'react';
import styles from "../../styles/service.module.css";
import Item from "../../components/service/item";
import App from "../../components/layouts/app";
import PagesLine from "@/components/pagesLine/pagesLine";

const Index = () => {
    return (

        <App>

         <>
         <PagesLine text={ <p>Դասընթացներ</p>}/>
         </>


            <div className={styles.serviceContainer}>

                <div className={styles.container}>
                    <div className={styles.row}>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
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