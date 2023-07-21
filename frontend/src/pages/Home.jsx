import React from "react";
import MainVideo from "../components/MainVideo";
import WineCarousel from "../components/WineCarousel";
import FranceCard from "../components/FranceCard";
import Domaine from "../components/Domaine";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <MainVideo />
      </header>
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Une journée sans vin</span>
            <span>est une journée</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>sans soleil!</div>
        </div>
      </div>
      <section className="Wine-secton">
        <WineCarousel />
        <FranceCard />
      </section>
      <ImageCarousel />
      <Domaine />
    </div>
  );
}
