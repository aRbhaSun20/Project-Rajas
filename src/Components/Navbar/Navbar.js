import { Button, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5fr 1fr",
          width: "95%",
          borderBottom: "1px solid lightgray",
          margin: "auto",
          height: "100%",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 6fr" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              style={{ fontSize: "2.5rem" }}
              align="center"
            >
              RAJAS
            </Typography>
          </div>
          <div
            style={{ display: "flex", columnGap: "4rem", alignItems: "center" }}
          >
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">Services</Typography>
            <Typography variant="h6">Questions & Answers</Typography>
            <Typography variant="h6">Consultation</Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "blue",
              height: "3.5rem",
              width: "13rem",
              borderRadius: ".5rem",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
