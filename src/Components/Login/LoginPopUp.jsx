import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import PeopleLogo from "../../assets/people-logo.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginPopUp({ openPopUp, setOpenPopUp }) {
  return (
    <React.Fragment>
      <Modal
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          elevation={3}
          sx={style}
          style={{
            display: "grid",
            gridTemplateRows: "1.2fr 1fr 1fr",
            height: "57vh",
            gridGap: "1rem",
            borderRadius: "1rem",
            width: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={PeopleLogo} style={{ width: "7rem" }} alt="people-log" />
            <Typography style={{ fontSize: 24 }}>WELCOME TO RAJAS</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              variant="outlined"
              label="Username"
              style={{ width: 400 }}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              style={{ width: 400 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              variant="outlined"
              style={{
                backgroundColor: "blue",
                height: 54,
                width: "17rem",
                borderRadius: 8,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
            <Typography style={{ color: "blue" }}>Forget password ?</Typography>
            <Typography>
              Don't have an account ?
              <span style={{ color: "blue" }}>Sign Up</span>
            </Typography>
          </div>
        </Paper>
      </Modal>
    </React.Fragment>
  );
}
