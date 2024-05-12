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
// import LoginSignup from "./Components/LoginSignup1";
import LoginSignup from "./Components/LoginSignup/LoginSignup1";
// import Quiz from "./Components/Quiz1";
import Quiz from "./Components/Quiz/Quiz1"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginSignup1" element={<LoginSignup />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
