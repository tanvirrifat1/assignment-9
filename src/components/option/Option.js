import React from 'react';
import './Optoin.css'


const Option = ({ option, handleAns }) => {

    return (
        <div>
            <button onClick={() => handleAns(option)} className='btn mt-5 bg-blue-500'>{option}</button>

        </div>
    );
};

export default Option;