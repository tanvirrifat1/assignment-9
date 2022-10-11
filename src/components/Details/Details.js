import React from 'react';
import Option from '../option/Option';

const Details = ({ topic }) => {
    console.log(topic)
    const { question, correctAnswer } = topic
    return (
        <div className='border-4 border-sky-500 rounded-md'>
            <p>{question}</p>
            <p>{correctAnswer}</p>
            {
                topic.options.map(tp => <Option
                    key={tp.id}
                    tp={tp}
                ></Option>)
            }
        </div>
    );
};

export default Details;