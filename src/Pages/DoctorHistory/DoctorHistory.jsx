import * as React from "react";
import NavbarAfter from "../../Components/Navbar/NavbarAfter";
import LeftBar from "../DoctorDashboard/LeftBar";
import PatientDetails from "./PatientDetails";

export default function DoctorHistory() {
  return (
    <React.Fragment>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
        <LeftBar />
        <div
          style={{
            backgroundColor: "#F4F4FC",
            display: "grid",
            width: "100%",
            height: "100vh",
            gridTemplateRows: "10vh auto",
          }}
        >
          <NavbarAfter />
          <PatientDetails />
          <br />
          <PatientDetails />
        </div>
      </div>
    </React.Fragment>
  );
}
