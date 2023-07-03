import React from 'react';
import { Carousel } from 'react-bootstrap';
import RactPlayer from 'react-player';
import video1 from "../assets/bg-video-wine.mp4";

const VideoSlider = () => {
  const videoProperties = [
    {
      id: 1,
      title: "vendages",
      src: video1,
      description: "vendages 2023",
    },
    {
      id: 2,
      title: "vendages",
      src: video1,
      description: "vendages 2023",
    },
    {
      id: 3,
      title: "vendages",
      src: video1,
      description: "vendages 2023",
    },
  ];
  return (
    <div>
      <Carousel>t</Carousel>
    </div>
  );
};

export default VideoSlider;
