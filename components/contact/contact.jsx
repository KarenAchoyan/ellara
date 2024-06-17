import React from 'react';
import styles from "../../styles/contact.module.css"
import {Form, Input, Button} from 'antd';
import {PushpinOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons';

const Contact = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <ul>
                        <li>
                            <span><PushpinOutlined/></span>
                            <b>Հակոբ Հակոբյան 3</b>
                        </li>
                        <li>
                            <span><PhoneOutlined/></span>
                            <b>+37444777344</b>
                        </li>
                        <li>
                            <span><MailOutlined/></span>
                            <b>ellara@gmail.com</b>
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti, distinctio earum
                        eius excepturi id, minus modi nam neque nesciunt numquam officiis perspiciatis provident quam
                        quas repudiandae tempore veritatis voluptates.</p>
                </div>
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
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Էլ-հասցե"
                            name="email"
                            rules={[{required: true, message: 'Please input your email!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Նամակ"
                            name="message"
                            rules={[{required: true, message: 'Please input your message!'}]}
                        >
                            <Input.TextArea/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Ուղարկել
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={styles.container}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24379.384091880172!2d44.477989449999995!3d40.1996524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1718638095299!5m2!1sru!2sam"
                />
            </div>
        </div>
    );
};

export default Contact;