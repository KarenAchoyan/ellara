import React from 'react';
import styles from "../../styles/contact.module.css"
import {Form, Input, Button} from 'antd';
import {PushpinOutlined, PhoneOutlined, MailOutlined, MessageFilled, HeartOutlined} from '@ant-design/icons';
import PagesLine from "@/components/pagesLine/pagesLine";


const Contact = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className={styles.contact}>
                <div className={styles.diver}>
                    <div className={styles.blocks}>
                        <div className={styles.part1}>
                            <div className={styles.icon}>
                                <MailOutlined/>
                            </div>
                        </div>
                        <div className={styles.part2}>
                            <h2>DROP US A LINE</h2>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>

                        </div>
                    </div>
                    <div className={styles.blocks}>
                        <div className={styles.part1}>
                            <div className={styles.icon}>
                                <HeartOutlined/>
                            </div>
                        </div>
                        <div className={styles.part2}>
                            <h2>ASK FOR SUPPORT</h2>
                            <p>Dynamically procrastinate B2C users after installed base benefits efficiently.</p>

                        </div>
                    </div>
                    <div className={styles.blocks}>
                        <div className={styles.part1}>
                            <div className={styles.icon}>
                                <MailOutlined/>
                            </div>
                        </div>
                        <div className={styles.part2}>
                            <h2>VISIT OUR OFFICES</h2>
                            <p>4771 West Field Mint
                                Salt Lake City,
                                UT 72883 312312 123123</p>

                        </div>
                    </div>
                </div>
                <div className={styles.sendme}>
                    <h1>SEND US A</h1>
                    <h2 >MESSAGE</h2>
                </div>
                <div className={styles.container}>

                    <div className={styles.section}>
                        <Form
                            name="contact"
                            layout="vertical"
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Անուն"
                                name="name"
                                rules={[{required: true, message: 'Please input your name!'}]}
                            >
                                <Input.TextArea

                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 6,
                                    }}
                                />
                                <div
                                    style={{}}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Էլ-հասցե"
                                name="email"
                                rules={[{required: true, message: 'Please input your email!'}]}
                            >
                                <Input.TextArea

                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 6,
                                    }}
                                />
                                <div
                                    style={{}}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Նամակ"
                                name="message"
                                rules={[{required: true, message: 'Please input your message!'}]}
                            >
                                <Input.TextArea

                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 6,
                                    }}
                                />
                                <div
                                    style={{}}
                                />
                            </Form.Item>


                        </Form>
                    </div>
                    <div className={styles.drive}>

                        <Form.Item
                            label="Էլ-հասցե"
                            name="email"
                            rules={[{required: true, message: 'Please input your email!'}]}
                        >

                        </Form.Item>
                        <Input.TextArea rows={12}/>

                    </div>

                </div>
                <div className={styles.section_two}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Ուղարկել
                        </Button>
                    </Form.Item>

                </div>


            </div>


            <div className={styles.container_one}>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24379.384091880172!2d44.477989449999995!3d40.1996524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1718638095299!5m2!1sru!2sam"
                />
            </div>
            <div className={styles.bottom}>
            <div className={styles.bottom_sun}>
                <div className={styles.info}>
                    <h1><PhoneOutlined/></h1>
                    <p>MONDAY TO FRIDAY</p>
                    <p>09:00 - 20:00</p>
                </div>
                <div className={styles.info}>
                    <h1><MailOutlined /></h1>
                    <p>4771 WEST FIELD MINT,</p>
                    <p>SALT LAKE CITY, UT 72883</p></div>
                <div  className={styles.info}>
                    <h1><PhoneOutlined /></h1>
                    <p>E-MAIL:</p>
                    <p>0INFO@GOODGROWTH.COM</p></div>
                <div className={styles.info}>
                    <h1><PhoneOutlined  /></h1>
                    <p>CALL US:</p>
                    <p>800.1148.800</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;