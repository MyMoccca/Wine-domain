import React from "react";
import gallery1 from "../assets/photo1.jpg";
import gallery2 from "../assets/photo2.jpg";
import gallery3 from "../assets/photo3.jpg";
import gallery4 from "../assets/photo4.jpg";
import gallery5 from "../assets/photo5.jpg";
import gallery6 from "../assets/photo7.jpg";
import gallery7 from "../assets/photo8.jpg";
import gallery8 from "../assets/photo10.jpg";
import gallery9 from "../assets/photo11.jpg";
import gallery10 from "../assets/photo12.jpg";
import gallery11 from "../assets/photo13.jpg";
import gallery12 from "../assets/photo15.jpg";

function DomaineGallery() {
  return (
    <div>
      <div className="wrapper">
        <div className="gallery">
          <ul>
            <li>
              <img src={gallery1} alt="vendages1" />
            </li>
            <li>
              <img src={gallery2} alt="vendages1" />
            </li>
            <li>
              <img src={gallery3} alt="vendages1" />
            </li>
            <li>
              <img src={gallery4} alt="vendages1" />
            </li>
            <li>
              <img src={gallery5} alt="vendages1" />
            </li>
            <li>
              <img src={gallery6} alt="vendages1" />
            </li>
            <li>
              <img src={gallery7} alt="vendages1" />
            </li>
            <li>
              <img src={gallery8} alt="vendages1" />
            </li>
            <li>
              <img src={gallery9} alt="vendages1" />
            </li>
            <li>
              <img src={gallery10} alt="vendages1" />
            </li>
            <li>
              <img src={gallery11} alt="vendages1" />
            </li>
            <li>
              <img src={gallery12} alt="vendages1" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DomaineGallery;
