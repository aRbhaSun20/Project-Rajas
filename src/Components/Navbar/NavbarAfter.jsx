import React from "react";
import {  Typography } from "@mui/material";

export default function NavbarAfter() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "grid",
          backgroundColor: "#F4F4FC",
          gridTemplateColumns: "5fr 1fr",
          width: "96%",
          borderBottom: "1px solid lightgray",
          margin: "auto",
          height: "10vh",padding:"0 2rem"
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
            <Typography
              variant="h4"
              style={{ fontSize: 40, color: "black" }}
              align="center"
            >
              RAJAS
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 32,
          }}
        ></div>
      </div>
    </React.Fragment>
  );
}
