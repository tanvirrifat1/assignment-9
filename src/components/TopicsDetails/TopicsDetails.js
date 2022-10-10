import React from 'react';


const TopicsDetails = ({ topic }) => {
    const { id, logo, name, total } = topic
    return (
        <div>
            <p>name: {name}</p>
            <p><small>id: {id}</small></p>
            <img src={logo} alt="" />
            <p><small>total: {total}</small></p>
        </div>
    );
};

export default TopicsDetails;