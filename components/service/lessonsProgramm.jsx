import React, {useState} from 'react';
import {Collapse} from 'antd';

const {Panel} = Collapse;

const LessonProgram = () => {
    const [faqData, setFaqData] = useState([
        {
            question: "Առաջին փուլ",
            arr: [
                {id:111, title: "Դաս 1", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:212, title: "Դաս 2", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:321, title: "Դաս 3", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:4312, title: "Դաս 4", answer:"Անցնելու ենք ֆլան ֆստան"},
            ]
        },
        {
            question: "Առաջին փուլ",
            arr: [
                {id:5, title: "Դաս 1", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:6, title: "Դաս 2", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:7, title: "Դաս 3", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:8, title: "Դաս 4", answer:"Անցնելու ենք ֆլան ֆստան"},
            ]
        },
        {
            question: "Առաջին փուլ",
            arr: [
                {id:9, title: "Դաս 1", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:10, title: "Դաս 2", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:11, title: "Դաս 3", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:12, title: "Դաս 4", answer:"Անցնելու ենք ֆլան ֆստան"},
            ]
        },
        {
            question: "Առաջին փուլ",
            arr: [
                {id:13, title: "Դաս 1", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:14, title: "Դաս 2", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:15, title: "Դաս 3", answer:"Անցնելու ենք ֆլան ֆստան"},
                {id:16, title: "Դաս 4", answer:"Անցնելու ենք ֆլան ֆստան"},
            ]
        },

    ])
    return (
        <Collapse accordion>
            {faqData.map((item, index) => (
                <Panel header={item.question} key={index}>
                    <Collapse accordion>
                        {item.arr.map((lesson, index)=>(
                            <Panel header={lesson.title} key={lesson.id}>
                                <p>{lesson.answer}</p>
                            </Panel>
                        ))}
                    </Collapse>
                </Panel>
            ))}
        </Collapse>
    );
};

export default LessonProgram;
