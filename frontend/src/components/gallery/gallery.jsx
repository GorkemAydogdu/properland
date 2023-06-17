import React, { useState } from "react";

import Container from "@/layout/container";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import slides from "./slides";
const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="gallery">
      <Container>
        <h2 className="heading-secondary">Property gallery</h2>
        <PhotoAlbum
          photos={slides}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </Container>
    </div>
  );
};

export default Gallery;
