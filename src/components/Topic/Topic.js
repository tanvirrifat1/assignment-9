import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsDetails from '../TopicsDetails/TopicsDetails';
import './Topic.css'

const Topic = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div className='m-10'>
            <section className="dark:bg-gray-400 dark:text-gray-100 containerss">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
                        <span className="dark:text-violet-400">laborum doloribus</span>delectus
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
                    </div>
                </div>
            </section>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
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