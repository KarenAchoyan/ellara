import React from 'react';
import styles from "../../styles/app.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul>
                    <li>Էջեր</li>
                    <li>Հետադարձ կապ</li>
                    <li>Մեր մասին</li>
                    <li>Ծառայություններ</li>
                    <li>Դասընթացներ</li>
                </ul>
                <ul>
                    <li>Հետադարձ կապ</li>
                    <li><span>Հասցե։</span>Հակոբ Հակոբյան 3</li>
                    <li><span>Հեռախոս։</span>+37444777344</li>
                    <li><span>էլ-հասցե։</span>ellara@info.am</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <p>Այս կայքը պատրաստվել է GeekLab ընկերության կողմից</p>
            </div>
        </footer>
    );
};

export default Footer;