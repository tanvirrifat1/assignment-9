import React from 'react';
import './Optoin.css'


const Option = ({ option, handleAddToCart }) => {

    return (
        <div>
            <button onClick={() => handleAddToCart(option)} className='btn mt-5 bg-blue-500'>{option}</button>

        </div>
    );
};

export default Option;