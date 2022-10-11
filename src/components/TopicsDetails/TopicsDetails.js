import React from 'react';
import { Link } from 'react-router-dom';


const TopicsDetails = ({ topic }) => {
    // console.log(topic)
    const { id, logo, name, total } = topic
    return (
        <div>
            <div className=' p-6 rounded shadow-lg'>
                <img
                    className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                    src={logo}
                    alt=''
                />
                <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
                <p className='text-white-700 font-bold'>Total: {total}</p>
                <Link to={`/topic/${id}`}>
                    <button
                        type='button'
                        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                    >
                        Add To Cart
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default TopicsDetails;