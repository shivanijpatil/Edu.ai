import React from 'react';
import PerformanceAnalysis from '../PerformanceAnalysis/PerformanceAnalysis';
import Tickets from '../Tickets/Tickets';
// import Quiz from '../Quiz/Quiz'; 
import { IconName } from 'react-icons/tfi';


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
