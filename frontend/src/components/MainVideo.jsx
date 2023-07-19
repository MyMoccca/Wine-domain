import React from "react";
import videoBg from "../assets/bg-video-wine.mp4";

function MainVideo() {
  return (
    <div className="main-video">
      <div className="video-overlay" />
      <video autoPlay loop className="bgVideo">
        <source src={videoBg} type="video/mp4" />
        <track src="#" kind="captions" label="english_captions" />
        <track src="#" kind="captions" label="english_captions" />
      </video>
      <div className="content-text">
        <h1>Domaine esclarmonde</h1>
      </div>
    </div>
  );
}

export default MainVideo;
