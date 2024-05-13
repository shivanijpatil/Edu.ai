// // import logo from "./logo.svg";
// import "./App.css";
// import LoginSignup from "./Components/LoginSignup/LoginSignup1";
// // import Sidebar from "./Components/Sidebar/Sidebar";
// // import Quiz from "./Components/Quiz/Quiz";

// function App() {
//   return (
//     <div>
//       <LoginSignup />
//       {/* <Quiz /> */}
//       {/* <Sidebar/> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from './Components/Quiz/Quiz1.jsx';
import Dashboard from './Components/Dashboard.js';
import Result from './Components/Result/Results.js'
import Landingpage from "./Components/landingpage.js";
import './App.css';
import LoginSignup from "./Components/LoginSignup/LoginSignup1.jsx";
// import { IconName } from 'react-icons/tfi';


function App() {
  return (
    <Routes>

      <Route path="/LoginSignup" element={<LoginSignup />} />
      <Route path="/" element={<Landingpage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/Result" element={<Result />} />

    </Routes>
  );
}

export default App;
