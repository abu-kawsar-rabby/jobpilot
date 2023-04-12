import React from 'react';
import Header from '../Header/Header';
import {
    Area,
    AreaChart,
    Bar,
    CartesianGrid,
    Legend,
    Line,
    ResponsiveContainer,
    Scatter,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';



const Statistics = () => {

    const assignmentMarks = [
        { id: "A1", assignment: "assignment 1", marks: 57 },
        { id: "A2", assignment: "assignment 2", marks: 48 },
        { id: "A3", assignment: "assignment 3", marks: 60 },
        { id: "A4", assignment: "assignment 4", marks: 60 },
        { id: "A5", assignment: "assignment 5", marks: 60 },
        { id: "A6", assignment: "assignment 6", marks: 60 },
        { id: "A7", assignment: "assignment 7", marks: 60 },
    ];



    const getIntroOfPage = (label) => {
        if (label === 'A1') {
            return "Assignment 1";
        }
        if (label === 'A2') {
            return "Assignment 2";
        }
        if (label === 'A3') {
            return "Assignment 3";
        }
        if (label === 'A4') {
            return 'Assignment 4';
        }
        if (label === 'A5') {
            return 'Assignment 5';
        }
        if (label === 'A6') {
            return 'Assignment 6';
        }
        if (label === 'A7') {
            return 'Assignment 7';
        }
        return '';
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="py-3 px-5 bg-white">
                    <p className="font-semibold">{getIntroOfPage(label)}</p>
                    <p className="label">{`Obtain Mark: ${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };


    return (
        <div>
            <Header
                props="Statistics"
            ></Header>

            <div className='pr-5 md:px-36 flex justify-center'>
                <ResponsiveContainer width="90%" height="100%" aspect={3}>
                    <AreaChart width={500} height={500} data={assignmentMarks} >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="id"></XAxis>
                        <YAxis dataKey="marks"></YAxis>
                        <Tooltip content={<CustomTooltip />} ></Tooltip>
                        <Legend></Legend>
                        <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="marks" barSize={20} fill="#413ea0"></Bar>
                        <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                        <Scatter dataKey="cnt" fill="red" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div >
    );
};

export default Statistics;