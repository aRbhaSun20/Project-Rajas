import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  AddBox,
  Info,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  paper: {
    display: "flex",
  },
  table: {
    borderBottom: "none",
    // marginLeft: '1rem'
  },
  icons: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  },
  iconBtnStyles: {
    background: "blue",
    margin: "0.2rem",
  },
  modalButtons: {
    fontFamily: "Titillium Web",
    textTransform: "none",
    borderRadius: "3rem",
    marginLeft: "1rem",
    color: "black",
    backgroundImage: "linear-gradient(to right,#F98A5C,#FEAA7B)",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat };
}

const rows = [
  createData("demo", "general checkup", "9am-11am | 5/11/2021"),
  createData("demo2", "eye checkup", "9am-11am | 5/11/2021"),
  createData("demo3", "heart checkup", "9am-11am | 5/11/2021"),
  createData("demo", "general checkup", "9am-11am | 5/11/2021"),
  createData("demo2", "eye checkup", "9am-11am | 5/11/2021"),
  createData("demo3", "heart checkup", "9am-11am | 5/11/2021"),
  createData("demo", "general checkup", "9am-11am | 5/11/2021"),
  createData("demo2", "eye checkup", "9am-11am | 5/11/2021"),
  createData("demo3", "heart checkup", "9am-11am | 5/11/2021"),
];
export default function RequestDetails() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper
        elevation={8}
        style={{
          width: "98%",
          margin: "0 auto",
          borderRadius: "1rem",
          height: "66vh",
        }}
      >
        <AppBar
          style={{ zIndex: "1", borderRadius: "1rem" }}
          position="relative"
          color="default"
          elevation={0}
        >
          <Toolbar style={{ height: 75 }}>
            <div className={classes.title}>
              <Typography variant="h6">Past Appointment Details</Typography>
              <IconButton>
                <Info />
              </IconButton>
            </div>
            <div
              style={{
                width: 650,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                style={{ width: 220 }}
                label="All Patient"
                // value={currency}
                // onChange={handleChange}
              >
                {/* {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} */}
              </TextField>
              <TextField
                label="Search here"
                style={{ width: 240 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Search />{" "}
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton
                className={classes.iconBtnStyles}
                justifyContent="flex-end"
                onClick={() => {
                  alert("Add button was clicked!");
                }}
                style={{ background: "blue" }}
              >
                <Tooltip title="add patient">
                  <AddBox style={{ fill: "white" }} />
                </Tooltip>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <TableContainer
          component={Paper}
          style={{
            margin: "1rem",
            width: "98%",
            maxHeight: "55vh",
            overflow: "auto",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  width: "100%",
                }}
              >
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Patient
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Request Type
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Alloted Slots
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Accept/Reject
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    width: "100%",
                    backgroundColor: i % 2 === 0 ? "#f1f1f1" : null,
                  }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2,1fr)",
                      width: "50%",
                      columnGap: "1rem",
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Accept
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ border: "1px solid red", color: "red" }}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}
