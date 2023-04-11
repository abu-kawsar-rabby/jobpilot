import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../Header/Header';


const Statistics = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const assignmentMarks = [
        { assignment: "assignment-1", marks: 57 },
        { assignment: "assignment-2", marks: 48 },
        { assignment: "assignment-3", marks: 60 },
        { assignment: "assignment-4", marks: 60 },
        { assignment: "assignment-5", marks: 60 },
        { assignment: "assignment-6", marks: 60 },
        { assignment: "assignment-7", marks: 60 },
    ];



    return (
        <div>
            <Header></Header>
            <h1>this is statistics page</h1>
            <LineChart
                width={500}
                height={300}
                data={assignmentMarks}
            >
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />

            </LineChart>
        </div>
    );
};

export default Statistics;