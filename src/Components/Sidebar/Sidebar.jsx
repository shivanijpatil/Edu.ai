import React from 'react';
import PerformanceAnalysis from './PerformanceAnalysis';
import Tickets from './Tickets';
import Quiz from './Quiz';

const Sidebar = () => {
  return (
    <div className="col-md-3 sidebar">
      <ul>
        <li><PerformanceAnalysis /></li>
        <li><Tickets /></li>
        <li><Quiz /></li>
      </ul>
    </div>
  );
}

export default Sidebar;