import React from 'react';
import App from "@/components/layouts/app";
import About from "@/components/about/about";
import styles from "../../styles/about.module.css"
import PagesLine from "../../components/pagesLine/pagesLine";
const Index = () => {
    return (
        <>
            <App>
                <PagesLine text={'Մեր մասին'}/>
                <About/>
            </App>
        </>
    );
};

export default Index;