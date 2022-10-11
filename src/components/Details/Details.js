import React, { useState } from 'react';
import Option from '../option/Option';
import './Details.css'
import { toast } from 'react-toastify';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Details = ({ topic }) => {
    const [open, setOpen] = useState(true);
    const { question, correctAnswer, options, id } = topic

    const handleAddToCart = (correct) => {
        if (correct === correctAnswer) {
            toast.success('curert', { autoClose: 500 })
        }
        else {
            toast.warning('incorrent!', { autoClose: 500 })
        }
    }

    return (
        <div className='quiz px-8 block w-full mt-4 py-3 font-semibold rounded-50% bg-cyan-200 text-gray-800'>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question</span>
                </div>
                <div className='flex justify-between'>
                    <h1 className='text-2xl text-black'>Question : {question}</h1>

                    <div onClick={() => setOpen(!open)} className='h-6 w-6 text-black'>
                        {open ? <EyeIcon /> : <EyeSlashIcon></EyeSlashIcon>}
                    </div>
                </div>
                <div className={open ? 'hidden' : 'block'}>
                    <h1 className='text-xl py-2 bg-white px-2 rounded-sm my-5'>
                        <span className='text-red-500 text-2xl'> Ans : </span>
                        {correctAnswer}
                    </h1>
                </div>
            </div>
            <div className='answer-section grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-10'>
                {
                    options.map(option => <Option
                        option={option}
                        handleAddToCart={handleAddToCart}
                    ></Option>)
                }
            </div>

        </div>
    );
};

export default Details;