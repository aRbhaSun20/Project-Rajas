import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import homeSvg from "../assets/home-png.png";
import { Button, Typography } from "@mui/material";
import LoginPopUp from "../Components/Login/LoginPopUp.jsx";

export default function Home() {

  const [openLogin, setOpenLogin] = useState({
    status: false,
    type: "",
  });

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#F4F4FC",
          display: "grid",
          width: "100vw",
          height: "100vh",
          gridTemplateRows: "10vh auto",
        }}
      >
        <Navbar />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr .5fr 1.8fr",
              height: "65%",
              margin: "auto",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                margin: "auto",
                textAlign: "start",
              }}
            >
              <Typography
                style={{ fontSize: 44, color: "gray", letterSpacing: 3 }}
              >
                Meet the best doctors online
                <span style={{ color: "black" }}>
                  {" "}
                  fast and effective with video call
                </span>
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "90%",
                textAlign: "start",
                margin: "auto",
              }}
            >
              <Typography
                style={{ width: "60%", fontSize: "1.2rem", color: "#383838" }}
              >
                Talk to our experienced doctors, get scheduled virtual
                consultations and e-prescriptions.
              </Typography>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  width: "75%",
                  margin: "auto",
                  height: "auto",
                  rowGap: "2rem",
                }}
              >
                <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                  For Patients
                </Typography>
                <Typography style={{ fontSize: 18 }}>
                  Users can login here
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    height: 54,
                    width: 230,
                    fontWeight: "bold",
                    borderRadius: 8,
                    backgroundColor: "blue",
                  }}   onClick={() => setOpenLogin({status:true,type:"patient"})}
                >
                  Login as Patient
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  width: "50%",
                  margin: "auto",
                  height: "auto",
                  rowGap: "2rem",
                }}
              >
                <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                  For Doctors
                </Typography>
                <Typography style={{ fontSize: 18 }}>
                  Doctors can login here
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    height: 54,
                    width: 230,
                    fontWeight: "bold",
                    borderRadius: 8,
                    backgroundColor: "blue",
                  }}
                  onClick={() => setOpenLogin({status:true,type:"doctor"})}
                >
                  Login as Doctor
                </Button>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={homeSvg} alt="home-svg" />
          </div>
        </div>
      </div>

      <LoginPopUp openPopUp={openLogin} setOpenPopUp={setOpenLogin} />
    </React.Fragment>
  );
}
