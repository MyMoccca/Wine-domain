import React from "react";
import ReactPlayer from "react-player";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

function Domaine() {
  return (
    <div className="domaine-wrapper">
      <h1 className="products-title domaine-title">
        {" "}
        Notre domaine au coeur des Hautes-Corbières
      </h1>
      <section className="domaine-container">
        <div className="domaine-item">
          <ReactPlayer
            playing
            className="react-player"
            url={video1}
            width="100%"
          />
          <div className="domaine-description">
            <h1>Vinification de chaque cépage séparément</h1>
            <h4>afin d'extraire au mieux arômes et couleurs</h4>
          </div>
        </div>
        <div className="domaine-item">
          <ReactPlayer
            playing
            className="react-player"
            url={video2}
            width="100%"
          />
          <div className="domaine-description">
            <h1> 25 hectares en agriculture biologique</h1>
            <h4>situées sur des sols argilo-calcaires schistes</h4>
          </div>
        </div>
        <div className="domaine-item">
          <ReactPlayer
            playing
            className="react-player"
            url={video3}
            width="100%"
          />
          <div className="domaine-description">
            <h1> Les terres authentiques</h1>
            <h4>de la plus ancienne AOC</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Domaine;
