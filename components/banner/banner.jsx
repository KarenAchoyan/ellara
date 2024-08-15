import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import styles from "../../styles/banner.module.css";


const onFinish = (values) => {
    console.log('Success:', values);
};


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const BannerForm = () => {
    return (
        <Form
            name="registration"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                className={styles.form}
                label="Անուն"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Խնդրում ենք մուտքագրել օգտատիրոջ անունը:',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className={styles.form}
                label="Գաղտնաբառ"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Խնդրում ենք մուտքագրել ձեր գաղտնաբառը:',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                className={styles.form}
                label="Հեռախոսահամար"
                name="usernumber"
                rules={[
                    {
                        required: true,
                        message: 'Խնդրում ենք մուտքագրել ձեր հեռախոսահամարը:',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className={styles.form}
                label="Email"
                name="useremail"
                rules={[
                    {
                        type: 'email',
                        message: 'Խնդրում ենք մուտքագրել վավեր email:',
                    },
                    {
                        required: true,
                        message: 'Խնդրում ենք մուտքագրել ձեր email:',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className={styles.form}
                name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 24 }}
            >

            </Form.Item>

            <Form.Item
                className={styles.form}
                wrapperCol={{ span: 24 }}
            >
                <Button type="primary" htmlType="submit" className={styles.button}>
                    Հաստատել
                </Button>
            </Form.Item>
        </Form>
    );
};

const Banner = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to display the modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Function to hide the modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={styles.banner}>
            <div className={styles.image}>
                <div className={styles.overline}></div>
                <img src="./banner.jpg" alt="Banner" />
            </div>
            <div className={styles.info}>
                <h1>Դասընթացի սկիզբ Հուլիսի 1-ից</h1>
                <h4>Գրանցվեք հիմա և ձեռք բերեք զեղչեր</h4>
                <Button type='primary' onClick={showModal}>Գրանցվել</Button>
            </div>

            <Modal
                title="Գրանցում"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                destroyOnClose
            >
                <BannerForm />
            </Modal>
        </div>
    );
};

export default Banner;
