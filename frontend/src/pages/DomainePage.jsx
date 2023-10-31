import React from "react";
import DomaineGallery from "../components/DomaineGallery";

function DomainePage() {
  return (
    <section className="DomainePage">
      <h1 className="main-title-domain"> Découvrez notre domaine en images</h1>
      <DomaineGallery />
    </section>
  );
}

export default DomainePage;
