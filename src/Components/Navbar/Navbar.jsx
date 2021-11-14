import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import GetPopUp from "../Login/GetPopUp";

export default function Navbar() {

  const [getPopUp, setgetPopUp] = useState(false);

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
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h4" style={{ fontSize: 40 }} align="center">
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
            columnGap: 32,
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "blue",
              height: 54,
              width: "13rem",
              borderRadius: 8,
              fontWeight: "bold",
            }}
            onClick={() => setgetPopUp(true)}
          >
            Getting Started
          </Button>
        </div>
      </div>
      <GetPopUp openPopUp={getPopUp} setOpenPopUp={setgetPopUp} />
    </React.Fragment>
  );
}
