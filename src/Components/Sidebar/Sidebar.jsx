import React from 'react';
import PerformanceAnalysis from '../PerformanceAnalysis/PerformanceAnalysis'; // Adjust the import path
import Tickets from '../Tickets/Tickets'; // Adjust the import path
// import Quiz from '../Quiz/Quiz'; // Adjust the import path

const Sidebar = () => {
  return (
    <div className="col-md-3 sidebar">
      <ul>
        <li><PerformanceAnalysis /></li>
        <li><Tickets /></li>
        {/* <li><Quiz /></li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
