import React from "react";
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
  Map,
  Menu,
  People,
  RequestPage,
} from "@mui/icons-material";
import { Badge, Divider, Tooltip } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NAV_ACTIONS } from "../../Context/NavigationReducers";

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

export default function LeftBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const currentNav = useSelector((state) => state.navigation);

  const NavBar = [
    {
      title: "Dashboard",
      icon: (
        <Badge color="primary" badgeContent={10} max={35}>
          <CalendarToday
            style={{
              padding: ".5rem 0",
              width: "2rem",
              color: currentNav.current === "Dashboard" && "blue",
              borderBottom:
                currentNav.current === "Dashboard" && "1px solid blue",
            }}
          />
        </Badge>
      ),
      link: "/doctordashboard",
    },
    {
      title: "Requests",
      icon: (
        <Badge color="primary" badgeContent={50} max={35}>
          <RequestPage
            style={{
              padding: ".5rem 0",
              width: "2rem",
              color: currentNav.current === "Requests" && "blue",
              borderBottom:
                currentNav.current === "Requests" && "1px solid blue",
            }}
          />
        </Badge>
      ),
      link: "/doctorrequest",
    },
    {
      title: "Chat",
      icon: (
        <Badge color="primary" badgeContent={30} max={25}>
          <Chat
            style={{
              padding: ".5rem 0",
              width: "2rem",
              color: currentNav.current === "Chat" && "blue",
              borderBottom: currentNav.current === "Chat" && "1px solid blue",
            }}
          />
        </Badge>
      ),
      link: "/doctorchat",
    },
    {
      title: "History",
      icon: (
        <History
          style={{
            padding: ".5rem 0",
            width: "2rem",
            color: currentNav.current === "History" && "blue",
            borderBottom: currentNav.current === "History" && "1px solid blue",
          }}
        />
      ),
      link: "/doctorhistory",
    },
    {
      title: "Pharmacy Near me",
      icon: (
        <Map
          style={{
            padding: ".5rem 0",
            width: "2rem",
            color: currentNav.current === "Pharmacy Near me" && "blue",
            borderBottom: currentNav.current === "Pharmacy Near me" && "1px solid blue",
          }}
        />
      ),
      link: "/",
    },
    {
      title: "Logout",
      icon: (
        <People
          style={{
            padding: ".5rem 0",
            width: "2rem",
            color: currentNav.current === "Logout" && "blue",
            borderBottom: currentNav.current === "Logout" && "1px solid blue",
          }}
        />
      ),
      link: "/",
    },
  ];

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          style: { position: "fixed" },
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
                dispatch({
                  type: NAV_ACTIONS.NAV_CHANGE,
                  payload: { current: text.title },
                });
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
  );
}
