import React from 'react';
import Option from '../option/Option';
import './Details.css'

const Details = ({ topic }) => {
    console.log(topic)
    const { question, correctAnswer, options, id } = topic
    return (
        <div className='quiz px-8 block w-full mt-4 py-3 font-semibold rounded-50% bg-cyan-200 text-gray-800'>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question</span>
                </div>
                <div className='question-text'>
                    <h4>{question}</h4>
                </div>
            </div>
            <div className='answer-section grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-10'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>

        </div>
    );
};

export default Details;