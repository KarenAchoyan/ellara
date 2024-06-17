import React from 'react';
import styles from "../../styles/about.module.css"

const About = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.sectionAbout}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit maiores nisi praesentium quos sapiente ut? Dolorum ducimus eveniet ipsum maiores provident quas ratione sequi veniam. Corporis eaque ipsum nulla possimus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit maiores nisi praesentium quos sapiente ut? Dolorum ducimus eveniet ipsum maiores provident quas ratione sequi veniam. Corporis eaque ipsum nulla possimus.</p>
                </div>
                <div className={styles.sectionAbout}>
                    <img src="./banner.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;