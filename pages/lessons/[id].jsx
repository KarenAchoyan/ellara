import React from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/service.module.css";
import PagesLine from "../../components/pagesLine/pagesLine";
import Button from "../../components/ui/button/button";

const Index = () => {
    return (
        <App>
            <PagesLine text={"Դասընթացի ինֆորմացիա"}/>
            <div className={styles.container}>
               <div className={styles.detailsContainer}>
                   <h1>Դասընթացի մանրամասներ</h1>
                   <div className={styles.content}>
                       <p>
                           Welcome to GeekLab, where we're dedicated to cultivating the next generation of front-end developers. Our Front-end Development Bootcamp is designed to equip you with the skills and knowledge needed to thrive in the dynamic world of web development. Whether you're a beginner or an experienced coder, this course will empower you to create stunning, interactive web experiences using the latest technologies.Front-end development is the art of bringing web designs to life, creating engaging user interfaces, and crafting seamless user experiences. In this comprehensive bootcamp, you'll dive deep into the core technologies of modern web development, including HTML, CSS, JavaScript, React, and Next.js. From building static web pages to developing dynamic web applications, you'll learn everything you need to succeed as a front-end developer.
                       </p>
                   </div>
                   <Button>Զանգահարել</Button>
               </div>
            </div>
        </App>
    );
};

export default Index;