import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard/DoctorDashboard";
import Home from "./Home";

export default function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doctordashboard" element={<DoctorDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
