import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import homeSvg from "../assets/home-png.png";

export default function Home() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#F4F4FC",
          display: "grid",
          width: "100vw",
          height: "100vh",
          gridTemplateRows: "10vh auto",
        }}
      >
        <Navbar />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div></div>
          <div>
            <img src={homeSvg} alt="home-svg" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
