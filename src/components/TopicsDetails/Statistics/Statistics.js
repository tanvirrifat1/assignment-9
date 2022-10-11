import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const charts = useLoaderData()
    console.log(charts.data)
    return (
        <div className='flex justify-center'>
            <LineChart width={500} height={400} data={charts.data}>
                <Line type="name" dataKey="id" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;