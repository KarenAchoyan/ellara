import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Assuming you're using Next.js
import {FacebookOutlined, InstagramOutlined, MenuUnfoldOutlined} from '@ant-design/icons'; // Update based on your icon library
import styles from '@/styles/app.module.css';
import {Button, Drawer} from "antd"; // Import your CSS module

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.pageYOffset > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <header className={`${styles.header} ${isSticky ? styles.isSticky : ''}`}>
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
                            <img src="/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.drawer}>
                        <Button type="primary" onClick={showDrawer}>

                            <h1 className={styles.drawh1}> <MenuUnfoldOutlined /></h1>
                        </Button>
                        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                            <div className={styles.top1}>
                                <div className={styles.contact1}>
                                    <ul>
                                        <li>Հակոբ Հակոբյան 3</li>
                                        <li>+37477474747</li>
                                    </ul>
                                </div>
                                <div className={styles.social1}>
                                    <ul>
                                        <li>
                                            <FacebookOutlined/>
                                        </li>
                                        <li>
                                            <InstagramOutlined/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.menuItems1}>
                                <ul>
                                    <li><Link href="/">Գլխավոր</Link></li>
                                    <li><Link href="/services">Ծառայություններ</Link></li>
                                    <li><Link href="/lessons">Դասընթացներ</Link></li>
                                    <li><Link href="/about">Մեր մասին</Link></li>
                                    <li><Link href="/contact">Հետադարձ կապ</Link></li>
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                    <div className={styles.menuItems}>
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
