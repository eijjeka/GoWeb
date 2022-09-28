import { Container } from "components/Container";
import { image } from "./imgExports";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import s from "./Cases.module.scss";

const images = [
  image.cases1jpg,
  image.cases2jpg,
  image.cases3jpg,
  image.cases4jpg,
  image.cases5jpg,
  image.cases6jpg,
];

export const Cases = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const setState = (id) => {
    setPhotoIndex(id);
    setIsOpen(true);
  };

  return (
    <section id="cases">
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
          animationDisabled={true}
        />
      )}

      <Container>
        <div className={s.cases}>
          <p className={s.cases__preTitle}>This is what we do</p>
          <h2 className={s.cases__title}>Business Cases</h2>
          <p className={s.cases__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={s.cases__list}>
            <li className={s.cases__item}>
              <picture>
                <source
                  srcSet={`${image.cases1jpg} 1x, ${image.cases1jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.cases1Webp} 1x, ${image.cases1Webp2x} 2x`}
                />
                <img
                  onClick={() => setState(0)}
                  className={s.cases__img}
                  src={image.cases1jpg}
                  alt="Meeting"
                />
              </picture>
            </li>
            <li className={s.cases__item} id="2">
              <picture>
                <source
                  srcSet={`${image.cases2jpg} 1x, ${image.cases2jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.cases2Webp} 1x, ${image.cases2Webp2x} 2x`}
                />
                <img
                  onClick={() => setState(1)}
                  className={s.cases__img}
                  src={image.cases2jpg}
                  alt="Meeting"
                />
              </picture>
            </li>
            <li className={s.cases__item} id="3">
              <picture>
                <source
                  srcSet={`${image.cases3jpg} 1x, ${image.cases3jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.cases3Webp} 1x, ${image.cases3Webp2x} 2x`}
                />
                <img
                  onClick={() => setState(2)}
                  className={s.cases__img}
                  src={image.cases3jpg}
                  alt="Meeting"
                />
              </picture>
            </li>
            <li className={s.cases__item} id="4">
              <picture>
                <source
                  srcSet={`${image.cases4jpg} 1x, ${image.cases4jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.cases4Webp} 1x, ${image.cases4Webp2x} 2x`}
                />
                <img
                  onClick={() => setState(3)}
                  className={s.cases__img}
                  src={image.cases4jpg}
                  alt="Meeting"
                />
              </picture>
            </li>
            <li className={s.cases__item}>
              <picture>
                <source
                  srcSet={`${image.cases5jpg} 1x, ${image.cases5jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.cases5Webp} 1x, ${image.cases5Webp2x} 2x`}
                />
                <img
                  onClick={() => setState(4)}
                  className={s.cases__img}
                  src={image.cases5jpg}
                  alt="Meeting"
                />
              </picture>
            </li>
            <li className={s.cases__item}>
              <picture>
                <source
                  srcSet={`${image.cases6jpg} 1x, ${image.cases6jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.cases6Webp} 1x, ${image.cases6Webp2x} 2x`}
                />
                <img
                  onClick={() => setState(5)}
                  className={s.cases__img}
                  src={image.cases6jpg}
                  alt="Meeting"
                />
              </picture>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
