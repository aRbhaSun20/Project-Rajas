import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import NavbarAfter from "../../Components/Navbar/NavbarAfter";
import {
  CalendarToday,
  Chat,
  Close,
  Dashboard,
  History,
  Inbox,
  Menu,
  RequestPage,
} from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { Divider, Tooltip } from "@mui/material";

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

export default function DoctorDashboard() {
  const [open, setOpen] = React.useState(false);

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
          <DrawerHeader>
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
          <List style={{ display: "grid", gridGap: "2rem" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
            ></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
