import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleTopic = () => {
    const topics = useLoaderData();
    console.log(topics.data.questions)
    return (
        <div>
            <h1>Topic</h1>
            {/* <p>correctAnswer {topis.correctAnswer}</p>
            <p>{topis.question}</p> */}

        </div>
    );
};

export default SingleTopic;