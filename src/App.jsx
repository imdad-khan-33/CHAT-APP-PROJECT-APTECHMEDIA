import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import HomePage from "./components/pages/Home.jsx";
import Chat from "./components/pages/Chat.jsx";
import Sessions from "./components/pages/Sessions.jsx";
import Exercises from "./components/pages/Exercises.jsx";
//import Journal from "./components/pages/Journal.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <ScrollToTop />
        <div className="flex-1 lg:ml-[300px] overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/exercises" element={<Exercises />} />
            {/* <Route path="/journal" element={<Journal />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
