import React from 'react'
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  CalendarToday,
  Chat,
  Close,
  History,
  Menu,
  People,
  RequestPage,
} from "@mui/icons-material";
import {
  Divider,
  Tooltip,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

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
    { title: "Dashboard", icon: <CalendarToday />, link: "/doctordashboard" },
    { title: "Requests", icon: <RequestPage />, link: "/doctordashboard" },
    { title: "Chat", icon: <Chat />, link: "/doctordashboard" },
    { title: "History", icon: <History />, link: "/doctorhistory" },
    {title:"Logout",icon:<People/>,link:"/"}
  ];

export default function LeftBar() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    return (
        <React.Fragment>
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
                onClick={(e) => {
                  navigate(text.link);
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
        </React.Fragment>
    )
}
