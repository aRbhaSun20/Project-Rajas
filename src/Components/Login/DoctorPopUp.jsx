import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { DateTime } from "luxon";
import React, { useState } from "react";
import DateAdapter from "@mui/lab/AdapterLuxon";
import { DatePicker, LocalizationProvider } from "@mui/lab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 'auto',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DoctorPopUp({ openPopUp, setOpenPopUp }) {
  const [currentDate, setCurrentDate] = useState(DateTime.now());
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
            gridTemplateRows: "1fr 4fr 2fr",
            height: "75vh",
            gridGap: "1rem",
            borderRadius: "1rem",
            width: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: 24 }}>
              Doctor Registration
            </Typography>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "space-around",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "2rem",
            }}
          >
            <TextField
              variant="outlined"
              label="First Name"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Last Name"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Phone Number"
              type="number"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Email Id"
              type="email"
              style={{ width: "100%" }}
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Date of Birth"
                value={currentDate}
                onChange={(newValue) => {
                  setCurrentDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} style={{ width: "100%" }} />
                )}
              />
            </LocalizationProvider>
            <TextField
              variant="outlined"
              label="Address"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Area of Specialisation"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Years of experience"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              style={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label="Confirm Password"
              type="password"
              style={{ width: "100%" }}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "75%",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  height: 54,
                  width: "13rem",
                  borderRadius: 8,
                  fontWeight: "bold",
                }}
              >
                Upload Document
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "blue",
                  height: 54,
                  width: "13rem",
                  borderRadius: 8,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Register
              </Button>
            </div>

            <Typography style={{ fontSize: ".7rem", textAlign: "center" }}>
              Please include educational qualification, license, research
              experience, work experienceand photo in your resume
            </Typography>
          </div>
        </Paper>
      </Modal>
    </React.Fragment>
  );
}
