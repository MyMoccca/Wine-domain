import React from "react";
import ReactPlayer from "react-player";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

function Domaine() {
  return (
    <div>
      <h1 className="domain-title"> Notre domain au coeur du terroir du vin</h1>
      <section className="domaine-container">
        <div className="domaine-item">
          <ReactPlayer
            playing
            className="react-player"
            url={video1}
            width="100%"
          />
          <div className="domaine-description">
            <h1>Titre item</h1>
            <h6>texte</h6>
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
            <h1>Titre item</h1>
            <h6>texte</h6>
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
            <h1>Titre item</h1>
            <h6>texte</h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Domaine;
