import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  AddBox,
  Delete,
  Edit,
  Info,
  Sms,
  VideoCall,
} from "@mui/icons-material";
import {
  AppBar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("demo", "pending", "general checkup", "9am-11am | 5/11/2021"),
  createData("demo2", "processing", "eye checkup", "9am-11am | 5/11/2021"),
  createData("demo3", "done", "heart checkup", "9am-11am | 5/11/2021"),
  createData("demo", "pending", "general checkup", "9am-11am | 5/11/2021"),
  createData("demo2", "processing", "eye checkup", "9am-11am | 5/11/2021"),
  createData("demo3", "done", "heart checkup", "9am-11am | 5/11/2021"),
  createData("demo", "pending", "general checkup", "9am-11am | 5/11/2021"),
  createData("demo2", "processing", "eye checkup", "9am-11am | 5/11/2021"),
  createData("demo3", "done", "heart checkup", "9am-11am | 5/11/2021"),
];
export default function PharmacyDetails() {
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
          <Toolbar>
            <div className={classes.title}>
              <Typography variant="h6">Pharmacy Details</Typography>
              <IconButton>
                <Info />
              </IconButton>
            </div>
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
                  gridTemplateColumns: "repeat(5,1fr)",
                  width: "100%",
                }}
              >
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Patient
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Status
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Request Type
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Requested Slots
                </TableCell>
                <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)",
                    width: "100%",
                    backgroundColor: i % 2 === 0 ? "#f1f1f1" : null,
                  }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      width: "75%",
                    }}
                  >
                    <IconButton style={{ width: "3.5rem", height: "3.5rem" }}>
                      <Edit style={{ fonSize: "1.5rem" }} />
                    </IconButton>
                    <IconButton style={{ width: "3.5rem", height: "3.5rem" }}>
                      <Delete style={{ fontSize: "1.5rem" }} />
                    </IconButton>
                    <IconButton style={{ width: "3.5rem", height: "3.5rem" }}>
                      <Sms style={{ fontSize: "1.5rem" }} />
                    </IconButton>
                    <IconButton style={{ width: "3.5rem", height: "3.5rem" }}>
                      <VideoCall style={{ fontSize: "2rem" }} />
                    </IconButton>
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
