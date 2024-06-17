import React from 'react';
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import styles from "../../styles/app.module.css";
const App = ({children}) => {
    return (
        <div>
         <Header/>
            {children}
         <Footer/>
        </div>
    );
};

export default App;