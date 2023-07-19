import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function DomaineGallery() {
  const images = [
    "https://picsum.photos/200/300?image=1050",

    "https://picsum.photos/300/300?image=206",
    "https://www.foodandwine.com/thmb/srEHECIjjqIsJfKkhy-oiwcoZ4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Guide-Beaujolais-FT-BLOG0722-2000-7f1cac81f5044d3cbfeac708b66c4bea.jpg",
    "https://picsum.photos/200/300?image=1050",

    "https://www.walshandsons.com.au/wp-content/uploads/2022/05/Syrah-Hero_1.jpg",
    "https://www.foodandwine.com/thmb/srEHECIjjqIsJfKkhy-oiwcoZ4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Guide-Beaujolais-FT-BLOG0722-2000-7f1cac81f5044d3cbfeac708b66c4bea.jpg",
    "https://picsum.photos/300/300?image=206",
    "https://www.foodandwine.com/thmb/srEHECIjjqIsJfKkhy-oiwcoZ4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Guide-Beaujolais-FT-BLOG0722-2000-7f1cac81f5044d3cbfeac708b66c4bea.jpg",
    "https://www.walshandsons.com.au/wp-content/uploads/2022/05/Syrah-Hero_1.jpg",
  ];
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 250: 2, 450: 3 }}>
        <Masonry>
          {images.map((image) => (
            <img
              alt="gallery"
              src={image}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default DomaineGallery;
