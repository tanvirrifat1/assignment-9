import React from 'react';

const Option = ({ tp }) => {
    const { options } = tp
    console.log(tp)
    if (options) {

    }
    return (
        <div>
            <p>{options}</p>
        </div>
    );
};

export default Option;