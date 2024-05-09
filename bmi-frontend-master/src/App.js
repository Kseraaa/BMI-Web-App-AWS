import React from "react";
import Home from "./pages/HomePage";
import Analyze from "./pages/AnalyzePage";
import Contact from "./pages/ContactPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BacktoTop from "./components/Tools/BacktoTop/BacktoTop";
import ScrollIndicator from "./components/Tools/Indicator/Indicator";
import "./components/Tools/Scrollbar/Scrollbar.css";

function App() {
  return (
    <div className="page-container">
        <ScrollIndicator/>
        <BacktoTop/>
        <BrowserRouter>
          <Routes>
            {/* client */}
            <Route path="/" element={<Navigate replace to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/analyze" element={<Analyze/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
