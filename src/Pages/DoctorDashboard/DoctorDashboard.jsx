import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import NavbarAfter from "../../Components/Navbar/NavbarAfter";
import {
  AddBox,
  CalendarToday,
  Chat,
  Close,
  Dashboard,
  Delete,
  Edit,
  History,
  Info,
  Menu,
  RequestPage,
  Sms,
  VideoCall,
} from "@mui/icons-material";
import {
  AppBar,
  Divider,
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

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  height: "10vh",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  postion: "relative",
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavBar = [
  { title: "Appointments", icon: <CalendarToday /> },
  { title: "Dashboard", icon: <Dashboard /> },
  { title: "Requests", icon: <RequestPage /> },
  { title: "Chat", icon: <Chat /> },
  { title: "Histroy", icon: <History /> },
];

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
];

export default function DoctorDashboard() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            style: { position: "relative" },
          }}
        >
          <DrawerHeader
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "75%",
              margin: "0 auto",
            }}
          >
            <IconButton onClick={() => setOpen((state) => !state)}>
              {!open ? (
                <Menu style={{ color: "blue", fontSize: 35 }} />
              ) : (
                <React.Fragment>
                  <Close style={{ color: "blue", fontSize: 35 }} />
                </React.Fragment>
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List style={{ display: "grid", gridGap: "1rem" }}>
            {NavBar.map((text, index) => (
              <ListItem
                button
                key={index}
                style={{
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: open ? "1fr 1fr" : "1fr",
                }}
              >
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {!open ? (
                    <Tooltip title={text.title}>{text.icon}</Tooltip>
                  ) : (
                    text.icon
                  )}
                </ListItem>
                {open && <ListItemText primary={text.title} />}
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div
          style={{
            backgroundColor: "#F4F4FC",
            display: "grid",
            width: "100%",
            height: "100vh",
            gridTemplateRows: "10vh auto",
          }}
        >
          <NavbarAfter />
          <Paper
            elevation={8}
            style={{
              width: "98%",
              margin: "0 auto",
              borderRadius: "1rem",
              height: "98%",
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
                  <Typography variant="h6">Patient Details</Typography>
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
              style={{ margin: "1rem", width: "98%" }}
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
                    <TableCell
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      Patient
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      Request Type
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      Requested Slots
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
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
                        <IconButton
                          style={{ width: "3.5rem", height: "3.5rem" }}
                        >
                          <Edit style={{ fonSize: "1.5rem" }} />
                        </IconButton>
                        <IconButton
                          style={{ width: "3.5rem", height: "3.5rem" }}
                        >
                          <Delete style={{ fontSize: "1.5rem" }} />
                        </IconButton>
                        <IconButton
                          style={{ width: "3.5rem", height: "3.5rem" }}
                        >
                          <Sms style={{ fontSize: "1.5rem" }} />
                        </IconButton>
                        <IconButton
                          style={{ width: "3.5rem", height: "3.5rem" }}
                        >
                          <VideoCall style={{ fontSize: "2rem" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
}
