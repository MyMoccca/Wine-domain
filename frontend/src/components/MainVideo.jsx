import React from "react";
import videoBg from "../assets/bg-video-wine.mp4";

const MainVideo = () => {
  return (
    <div className="main-video">
      <div className="video-overlay"></div>
      <video src={videoBg} autoPlay loop className="bgVideo" />
      <div className="content-text">
        <h1>Domaine esclarmonde</h1>
      </div>
    </div>
  );
};

export default MainVideo;
