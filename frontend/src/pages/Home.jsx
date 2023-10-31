import React from "react";
import MetaTags from "react-meta-tags";
import MainVideo from "../components/MainVideo";
import WineCarousel from "../components/WineCarousel";
import FranceCard from "../components/FranceCard";
import Domaine from "../components/Domaine";
import ImageCarousel from "../components/ImageCarousel";
import metaimage from "../assets/slide1.jpg";

export default function Home() {
  return (
    <div>
      <MetaTags>
        <title>Domaine Esclarmonde</title>
        <meta
          name="description"
          content="Vigneron independant familial au coeur des Hautes Corbières, à Paziols. Vins de l'agriculture biologique : Rosé, Blanc, Rouge."
        />
        <meta
          property="og:title"
          content="Domaine Esclarmonde - vigneron independant à Paziols"
        />
        <meta property="og:image" content={metaimage} />
      </MetaTags>

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

      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three" />
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four" />
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
