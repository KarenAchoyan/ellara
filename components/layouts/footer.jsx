import React from 'react';
import styles from "../../styles/app.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.ull}>
                <ul>
                    <li><Link href="/services">Ծառայություններ</Link></li>
                    <li><Link href="/contact">Հետադարձ կապ</Link></li>
                    <li><Link href="/about">Մեր մասին</Link></li>
                    <li><Link href="/services">Ծառայություններ</Link></li>
                    <li><Link href="/lessons">Դասընթացներ</Link></li>
                </ul>
                </div>
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