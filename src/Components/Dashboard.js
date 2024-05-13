// Dashboard.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from './Sidebar';
import PerformanceAnalysis from './PerformanceAnalysis';
// import { IconName } from 'react-icons/tfi';


const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <PerformanceAnalysis />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
