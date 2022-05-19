import "./Gallery.scss";
import React, { useState, useCallback } from "react";
import Galler from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const photos = [
  {
    src: "img/gallery/1.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/2.jpeg",
    width: 1.5,
    height: 2,
  },
  {
    src: "img/gallery/3.jpeg",
    width: 3,
    height: 2,
  },
  {
    src: "img/gallery/4.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/5.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/6.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/13.jpeg",
    width: 3,
    height: 2,
  },
  {
    src: "img/gallery/7.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/8.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/14.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/9.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/10.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/15.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/11.jpeg",
    width: 2,
    height: 3,
  },
  {
    src: "img/gallery/12.jpeg",
    width: 2,
    height: 3,
  },
];

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="galeery__wrapper">
        <h2 className="gallery__title">Портфолио</h2>
        <Galler photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </section>
  );
}

export default Gallery;
