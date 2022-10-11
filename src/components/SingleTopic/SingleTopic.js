import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const SingleTopic = () => {
    const topics = useLoaderData();
    // console.log(topics)
    return (
        <div>
            <h1>Topic</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-10 gap-11'>
                {
                    topics.data.questions.map(topic => <Details
                        key={topic.id}
                        topic={topic}
                    ></Details>)
                }
            </div>
        </div>
    );
};

export default SingleTopic;