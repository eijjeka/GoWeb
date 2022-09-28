import { useState } from "react";
import { image } from "../Cases/imgExports";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  image.cases1jpg2x,
  image.cases2jpg2x,
  image.cases3jpg2x,
  image.cases4jpg2x,
  image.cases5jpg2x,
  image.cases6jpg2x,
];

export const Modal = ({ index, open }) => {
  const [photoIndex, setPhotoIndex] = useState(index);
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex(((photoIndex + 1) % images.length) % images.length)
          }
        />
      )}
    </div>
  );
};
