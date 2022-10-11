import React from 'react';

const Details = ({ topic }) => {
    console.log(topic)
    const { question, correctAnswer } = topic
    return (
        <div className='border-4 border-sky-500 rounded-md'>
            <p>{question}</p>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default Details;