import { Avatar, Typography } from "@mui/material";
import React from "react";

export default function ChatBox() {
  return (
    <React.Fragment>
      <div
        style={{
          height: "9vh",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 1fr",
          placeContent: "center",
          borderBottom: "1px solid lightgray",cursor:"pointer"
        }}
      >
        <div>
          <Avatar
            sx={{
              width: 50,
              height: 50,
            }}
          >
            H
          </Avatar>
        </div>
        <div style={{ display: "grid", textAlign: "start" }}>
          <Typography style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Patient Name
          </Typography>
          <Typography style={{ fontSize: ".85rem" }}>Latest Message</Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            rowGap: ".5rem",
          }}
        >
          <Typography style={{ fontSize: ".85rem" }}>12:50</Typography>
          <Avatar
            sx={{
              width: 20,
              height: 20,
              fontSize: ".8rem",
              background: "#00eb00",
              color: "black",
            }}
          >
            2
          </Avatar>
        </div>
      </div>
    </React.Fragment>
  );
}
