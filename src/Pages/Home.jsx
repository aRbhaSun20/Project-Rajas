import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import homeSvg from "../assets/home-png.png";
import { Button, Typography } from "@mui/material";

export default function Home() {
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
              gridTemplateRows: "1fr 2fr",
              height: "60%",
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
                Meet the best doctors online{" "}
                <span style={{ color: "black" }}>fast and effective</span>
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
                  height: "75%",
                }}
              >
                <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                  For Users
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
                  }}
                >
                  Make an appointment
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
                  height: "75%",
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
                >
                  View appointments
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
    </React.Fragment>
  );
}
