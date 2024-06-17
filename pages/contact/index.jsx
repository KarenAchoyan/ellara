import React from 'react';
import Contact from "@/components/contact/contact";
import App from "@/components/layouts/app";
import PagesLine from "../../components/pagesLine/pagesLine";

const Index = () => {
    return (
        <>
            <App>
                <PagesLine text={'Հետադարձ կապ'}/>
                <Contact/>
            </App>
        </>
    );
};

export default Index;