import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import "./styles.css";
import {
  AttachFile,
  KeyboardVoice,
  Mood,
  MoreVert,
  Search,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  InputAdornment,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import ChatBox from "./ChatBox";
import { map } from "leaflet";

export default function ChatDetails() {

  const [message, setMessage] = useState("");
  const [allmessages, setAllmessages] = useState([]);
  function handleSubmit(e){
    setAllmessages((val)=>[...val,{message : message,time:new Date().getHours() + ":" + new Date().getMinutes()}])
    setMessage("")
  }


  return (
    <React.Fragment>
      <Paper
        elevation={8}
        style={{
          width: "98%",
          margin: "0 auto",
          borderRadius: "1rem",
          height: "89vh",
          display: "grid",
          gridTemplateColumns: "1fr 3.5fr",
        }}
      >
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <TextField
            placeholder="Search or start a message"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              style: { borderRadius: ".7rem", height: "2.8rem" },
            }}
          />
          <div
            style={{
              maxHeight: "79vh",
              overflow: "auto",
              paddingRight: "1rem",
            }}
          >
            {new Array(10).fill("").map((ele, i) => (
              <ChatBox key={i} />
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateRows: "1fr 10fr 1fr" }}>
          <div
            style={{
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: "1rem",
              }}
            >
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                }}
              >
                H
              </Avatar>
              <Typography>Patient Name</Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton>
                <Search />{" "}
              </IconButton>{" "}
              <IconButton>
                <MoreVert />{" "}
              </IconButton>
            </div>
          </div>
          <div  style={{overflowY:'scroll',height:'42rem'}} >

             {/* /*doctor division */}
          
             <div style={{ width: "100%" }}>
              <div class="container" style={{ textAlign: "left" }}>
                <h1 style={{ color: "white", fontSize: "0.8rem" }}> user </h1>
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-right">11:00</span>
              </div>
            </div>

            {/* /*user division */ }

            {allmessages.map((val)=>{

              return (  <div class="container darker" style={{ textAlign: "right" }}>
              <h1 style={{ color: "black", fontSize: "0.8rem" }}> doctor </h1>
              <p>{val.message}</p>
              <span class="time-left">{val.time}</span>
            </div>)
            })}
          
            
           






          </div>
          <div
            style={{
              background: "#f5f5f5",
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2rem",
            }}
          >
            <IconButton>
              <Mood />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>{" "}
            <TextField
              placeholder="Type a message"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "1rem",
                  height: "2.8rem",
                  width: "73rem",
                },
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButton onClick={handleSubmit}>
              {message === "" ? <KeyboardVoice /> : <Send />}
            </IconButton>{" "}
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
}
