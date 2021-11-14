import { LocalPharmacy } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";

export default function PharmacyBox() {
  return (
    <React.Fragment>
      <Paper
        elevation={3}
        style={{
          height: "11vh",
          display: "grid",
          gridTemplateColumns: "1fr 5fr 1fr",
          placeContent: "center",
          borderBottom: "1px solid lightgray",
          cursor: "pointer",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <LocalPharmacy style={{ fontSize: "2.5rem" }} />
        </div>
        <div style={{ display: "grid", textAlign: "start", rowGap: ".4rem" }}>
          <Typography style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            Pharmacy Name
          </Typography>
          <Typography style={{ fontSize: ".85rem" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: ".5rem",
          }}
        >
          <Typography style={{ fontSize: ".95rem", color: "green" }}>
            10 m
          </Typography>
        </div>
      </Paper>
    </React.Fragment>
  );
}
