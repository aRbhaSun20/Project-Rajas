import * as React from "react";
import NavbarAfter from "../../Components/Navbar/NavbarAfter";
import LeftBar from "./LeftBar";
import PatientDetails from "./PatientDetails";
import PharmacyDetails from "./PharmacyDetails";

export default function DoctorDashboard() {
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
          <PharmacyDetails />
        </div>
      </div>
    </React.Fragment>
  );
}
