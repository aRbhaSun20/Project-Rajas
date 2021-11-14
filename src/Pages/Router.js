import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorChat from "./DoctorChat/DoctorChat";
import DoctorDashboard from "./DoctorDashboard/DoctorDashboard";
import DoctorHistory from "./DoctorHistory/DoctorHistory";
import DoctorRequest from "./DoctorRequest/DoctorRequest";
import Home from "./Home";
import PharmacyMap from "./PharmacyMaps/PharmacyMap";

export default function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doctordashboard" element={<DoctorDashboard />} />
          <Route path="doctorhistory" element={<DoctorHistory />} />
          <Route path="doctorrequest" element={<DoctorRequest />} />
          <Route path="doctorchat" element={<DoctorChat />} />
          <Route path="patientdashboard" element={<DoctorDashboard />} />
          <Route path="patienthistory" element={<DoctorHistory />} />
          <Route path="patientrequest" element={<DoctorRequest />} />
          <Route path="patientchat" element={<DoctorChat />} />
          <Route path="pharmacyMap" element={<PharmacyMap />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
