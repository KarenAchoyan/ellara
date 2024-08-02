import React from 'react';
import {Collapse} from 'antd';

const {Panel} = Collapse;

const FAQ = () => {
    const faqData = [
        {
            question: "What is Next.js?",
            answer: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites."
        },
        {
            question: "What is Ant Design?",
            answer: "Ant Design is a React UI library that provides a set of high-quality components and demos for building rich, interactive user interfaces."
        },
        {
            question: "How to use Ant Design with Next.js?",
            answer: "You can use Ant Design with Next.js by installing the antd package and importing the components and CSS files into your Next.js project."
        }
    ];

    return (
        <Collapse accordion>
            {faqData.map((item, index) => (
                <Panel header={item.question} key={index}>
                    <Collapse accordion>
                        <Panel header={item.question} key={index}>
                            <p>{item.answer}</p>
                        </Panel>
                    </Collapse>
                </Panel>
            ))}
        </Collapse>
    );
};

export default FAQ;
