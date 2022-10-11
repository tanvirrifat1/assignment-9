import React from 'react';
import './Optoin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option }) => {
    const notify = () => toast("Wow so easy!");
    return (
        <div>
            <button onClick={notify} className='btn mt-5 bg-blue-500'>{option}</button>
            <ToastContainer />
        </div>
    );
};

export default Option;