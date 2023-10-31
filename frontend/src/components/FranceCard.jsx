import React from "react";
import { Link } from "react-router-dom";

function FranceCard() {
  return (
    <div className="France-card">
      <div className="carte-container">
        <svg viewBox="0 0 1000 1000">
          <path
            className="FrancePath"
            fill="#f9f9f9"
            stroke="black"
            strokeWidth="5"
            d="M155.05,379.61c-40.52-54.91-91.65-100.97-134.99-153.51-8.79-10.82-16.87-21.94-18.6-36.48-3.86-21.3,17.21-40.57,34.54-29.32,21.88,14.19,53.58,18.72,97.61,13.9,100.85-11.05,73.92-85.18,66.82-104.23-.96-2.57-2.26-5.02-4.01-7.14-6.28-7.57-15.07-8.62-15.37,14.78-.05,3.91,.32,7.84,1.07,11.7,5.04,25.84,27.01,45.04,53.23,47.46,22.11,2.05,44.94,1.91,64.7-9.16,61.44-33.05,86.85-155.17,113.96-120.46,42.4,47.94,83.95,98.02,135.59,136.4,41.18,27.23,88.24,47.5,137.45,53.57,6.91-.97,23.31,1.74,22.98-8.5-.57-3.73-3.2-5.82-6.49-6.96-10.72-4.24-17.99,22.22-20.44,29.96-6.61,23.96-8.46,49.21-2.11,73,7.69,28.79-.46,38.29-.46,38.29-5.7,6.59-20.72,10.41-37.48,12.71-51.67,7.08-57.97,99.16-77.96,84.45-3.69-2.79-3.18-9.16,.42-13.49,6.19-7.21,15.18-4.32,23.04-3.46,14.88,2.49,35.38,11.86,33.4,29-20.12,173.87,37.39,170.15,38.62,188.48,1.65,24.59-16.34,53.04-28.52,65.02-19.41,17.91-52.15,34.47-76.01,15.51-44.38-37.17-119.31-70.8-163.99-16.51-13.31,17.07-5.13,40.69-18,58-32.49,31.12-95.98-24.97-119.08-50.13-5.31-5.78-12.46-7.61-16.77-3.19-2.04,2.09-12.02,9.79-14.67,11.02-12.25,5.69-25.41-.06-38.01-2.58-14.18-3.53-76.12-29.05-83.47-45.12-8.38-18.3,13.61-61.69,14.78-64.33,17.8-40.29,47.17-103.45,51.87-153.5,1.82-19.39-3.07-38.82-13.65-55.17h0Zm186.98,253.16c-1.23,3.19-3.28,8.7-4.37,14.03-1.6,7.82-2.49,14.81,4.34,19.94,4.26,3.19,10.04,5.8,11.39,8.58,1.14,3.61,1.2,28.82-.26,30.69-4.3,5.49-10.26,5.84-10.72,6.41-.27,.33-.34,1.23,.09,1.27h26.56c.42-.04,.36-.94,.09-1.27-.46-.57-6.42-.92-10.72-6.41-1.46-1.87-1.4-27.08-.26-30.69,1.35-2.78,7.13-5.38,11.39-8.58,6.84-5.12,5.95-12.12,4.34-19.94-1.09-5.33-3.14-10.85-4.37-14.03h-27.49Zm78.53,4.16s-8.06-11.95,7.84-56.22c5.36-14.92,7.31-21.64,7.63-25.7,.68-8.48-10.04-15.24-16,50.87,39.06-9.93,51.23-17.45,55.62-26.23,2.02-4.03,1.45-8.91-1.45-12.35-4.78-5.67-15.55-12.56-38.74-8.06-36.67,7.12-49.45,31.49-42.31,31.17m56.61,36.38s5.82-11.62-3.88-9.04c-9.83,2.62-16.31,12.81-10.31,18.59s14.19-9.56,14.19-9.56c0,0-1.35,5.31,.4,10.2,.99,2.78,4.61,3.45,6.5,1.18l8.26-10.13c.33-.4,9.26-13.16,20.16-10.78,8.36,1.82-6.63,13.73-14.36,20.58-.81,.72-.14,2.04,.92,1.81,4.76-1.03,12.25-1.87,16.53,1.61s11.86-20.23,11.86-20.23l-2.8,16.99s-.86,14.24,14.31-7.38c4.01-5.71,6.96-9.32,9.07-11.59,3.64-3.92,10.35-2.08,11.29,3.19,.34,1.95,.36,4.43-.16,7.59-2.37,14.45-11.43,12.8-14.88,9.92-3.59-2.99-5.39-15.53,4.2-20.77,0,0,3.03,15.8,23.41,10.63,20.38-5.18,13.8-63.84,10.14-43.35-2.58,14.41-12.94,44.65-6.04,53.92,6.9,9.27,20.27-24.59,20.27-24.59,0,0,21.46,8.84,20.06,18.12s-17.32,10.9-17.54,3.39m-65-29.22c-1.18,.3-2.36,.89-3.35,1.67-.1-1.08,.49-5.61-1.28-6.2-.98-.39-1.97-.1-2.85,.49-1.67,1.08-2.76,3.05-2.95,5.12-.1,2.07,.69,4.13,1.97,5.61,.98,1.28,3.35,2.56,4.72,3.25-1.87-2.95,5.61-5.12,6.2-7.68,.39-1.28-.79-2.56-2.46-2.26Z"
          />
        </svg>

        <Link to="/contact" className="btn-articles contact-btn">
          <span className="btn__circle red__cercle" />
          <span className="btn__white-circle">
            <svg id="icon-arrow-right" viewBox="0 0 21 12">
              <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z" />
            </svg>
          </span>
          <span className="btn__text contact-btn-text"> Nous trouver</span>
        </Link>
      </div>
      <div className="texte-descript">
        <h1 className="main-title">Domaine Esclarmonde</h1>
        <h2 className="title-terroir">Le vin au coeur du territoir</h2>
        <p className="texte-terroir">
          C'est à Paziols, en plein coeur des Hautes-Corbières, sur les terres
          de la plus ancienne des AOP rouge du Languedoc, le Fitou, que nous
          avons créé Luc et Gaëtan, père et fils, notre domaine en 2013, après
          avoir été en cave coopérative durant 5 générations.
        </p>
        <p className="texte-terroir">
          Nos 25 hectares en agriculture biologique sont situées sur des sols
          argilo-calcaires schistes, et galets répartis en 10 hectares de
          Grenache noir, 8 hectres de Carignan noir, 7 hectares de Syrah et 0.2
          hectare de Macabeu.
        </p>

        <p className="texte-terroir">
          Ce terroire magnifique entre vallées étroites et côteaux aux pentes
          abruptes sur sols caillouteux, peu profonds et chauds donnent des ins
          incomparables.
        </p>
        <p className="texte-terroir">
          Avec les conseils de l'oenologue de la famille Marc Esclarmonde,
          vendanges mécaniques, uniquement le matin, sauf pour une vieille
          parcelle centenaire de Carignan vandangée à la main en famille, puis
          travail suivi à la cave avec égrappage et tri. Nous vinifions ensuite
          chaque cépage et chaque parcelle séparément, (remontage, délestage et
          pigeage journalier) afin d'extraire au mieux arômes et couleurs, ce
          qui donne naissance à plusieurs cuvées.
        </p>
      </div>
    </div>
  );
}

export default FranceCard;
