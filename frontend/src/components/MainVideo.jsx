import React from "react";
import videoBg3 from "../assets/wine.mp4";
import barique from "../assets/barique.png";
import grapes from "../assets/grapes.png";
import logo from "../assets/logo-DE.png";

function MainVideo() {
  return (
    <div className="main-video">
      <div className="video-overlay" />
      <video autoPlay loop className="bgVideo">
        <source src={videoBg3} type="video/mp4" />
        <track src="#" kind="captions" label="english_captions" />
        <track src="#" kind="captions" label="english_captions" />
      </video>
      <div className="content-text">
        <img src={barique} alt="barique" width="250px" />
        <h1>
          <img src={logo} alt="logo" width="320px" />
        </h1>
        <img src={grapes} width="200px" alt="wine grappes" />
      </div>
    </div>
  );
}

export default MainVideo;
