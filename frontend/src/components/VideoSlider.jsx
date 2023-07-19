import React from "react";
import Slider from "react-touch-drag-slider";
import ReactPlayer from "react-player";
import video1 from "./videos/video-wine1.mp4";
import video2 from "./videos/video-wine2.mp4";
import video3 from "./videos/video-wine3.mp4";

function VideoSlider() {
  const videoProperties = [
    {
      id: 1,
      title: "vendages",
      src: video1,
      description: "vendages 2021",
    },
    {
      id: 2,
      title: "vendages",
      src: video2,
      description: "vendages 2022",
    },
    {
      id: 3,
      title: "vendages",
      src: video3,
      description: "vendages 2023",
    },
  ];

  return (
    <div className="slide-container">
      <Slider activeIndex={0} threshHold={100} transition={0.5} scaleOnDrag>
        {videoProperties.map((video) => {
          return (
            <ReactPlayer
              url={video.src}
              width="100%"
              pip="true"
              controls="true"
              playing="true"
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default VideoSlider;
