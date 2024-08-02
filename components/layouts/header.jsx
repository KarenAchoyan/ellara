import React from 'react';
import styles from "../../styles/app.module.css";
import {FacebookOutlined, InstagramOutlined} from "@ant-design/icons";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.contact}>
                        <ul>
                            <li>Հակոբ Հակոբյան 3</li>
                            <li>+37477474747</li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <ul>
                            <li>
                                <FacebookOutlined />
                            </li>
                            <li>
                                <InstagramOutlined />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <img src="/logo.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            <li><Link href="/">Գլխավոր</Link></li>
                            <li><Link href="/services">Ծառայություններ</Link></li>
                            <li><Link href="/lessons">Դասընթացներ</Link></li>
                            <li><Link href="/about">Մեր մասին</Link></li>
                            <li><Link href="/contact">Հետադարձ կապ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;