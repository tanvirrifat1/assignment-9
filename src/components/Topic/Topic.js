import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsDetails from '../TopicsDetails/TopicsDetails';
import './Topic.css'

const Topic = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <div className='m-10'>
            <div className='relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0'>
                <div className='flex flex-col items-start w-full max-h-80 max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl'>
                    <div className='lg:my-4 lg:max-w-lg lg:pr-5'>
                        <div className='max-w-xl  '>
                            <div>

                            </div>
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl sm:leading-none'>
                                EDUCATION EVERYWHERE
                            </h2>
                            <p className='text-base  md:text-lg'>
                                To test your Web Developer knowledge, employers may ask
                                questions about HTML, CSS, JavaScript, SQL, Python, jQuery, and
                                other programming languages,{' '}
                                <span className=''>
                                    as well as questions about other web development tools and
                                    processes.
                                </span>
                            </p>
                        </div>
                        <div className='flex flex-col items-center md:flex-row'>
                        </div>
                    </div>
                </div>
                <div className='inset-y-0 right-0  w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0'>
                    <img
                        className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full'
                        src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                        alt=''
                    />
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-8'>
                {
                    topics.data.map(topic => <TopicsDetails
                        key={topic.id}
                        topic={topic}
                    ></TopicsDetails>)
                }
            </div>
        </div>
    );
};

export default Topic;