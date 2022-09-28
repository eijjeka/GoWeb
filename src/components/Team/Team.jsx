import { Container } from "components/Container";
import { image } from "./imgExports";
import icon from "images/symbol-defs.svg";
import s from "./Team.module.scss";

export const Team = () => {
  return (
    <section className={s.team}>
      <Container>
        <p className={s.team__subTitle}>Who we are</p>
        <h2 className={s.team__title}>Our Professional Team</h2>
        <p className={s.team__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>

        <ul className={s.team__list}>
          <li className={s.team__item}>
            <div className={s.team__card}>
              <picture>
                <source
                  srcSet={`${image.person1Jpg}1x, ${image.person1Jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.person1Webp}1x, ${image.person1Webp2x} 2x`}
                />
                <img
                  className={s.team__img}
                  src={image.person1Jpg}
                  alt="foto John Doe"
                />
              </picture>
              <div className={s.list__wrapper}>
                <ul className={s.social__list}>
                  <li className={s.social__item}>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={35}
                        height={35}
                      >
                        <use href={`${icon}#facebook`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={35}
                        height={33}
                      >
                        <use href={`${icon}#twitter`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={40}
                        height={31}
                      >
                        <use href={`${icon}#youtube`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        style={{ width: "35px", height: "39px" }}
                      >
                        <use href={`${icon}#linkedin`}></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.card__meta}>
              <h3 className={s.card__meta_title}>John Doe</h3>
              <p className={s.card__meta_text}>President</p>
            </div>
          </li>
          <li className={s.team__item}>
            <div className={s.team__card}>
              <picture>
                <source
                  srcSet={`${image.person2Jpg}1x, ${image.person2Jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.person2Webp}1x, ${image.person2Webp2x} 2x`}
                />
                <img
                  className={s.team__img}
                  src={image.person2Jpg}
                  alt="foto Jane Doe"
                />
              </picture>
              <div className={s.list__wrapper}>
                <ul className={s.social__list}>
                  <li className={s.social__item}>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={35}
                        height={35}
                      >
                        <use href={`${icon}#facebook`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={35}
                        height={33}
                      >
                        <use href={`${icon}#twitter`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={40}
                        height={31}
                      >
                        <use href={`${icon}#youtube`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        style={{ width: "35px", height: "39px" }}
                      >
                        <use href={`${icon}#linkedin`}></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.card__meta}>
              <h3 className={s.card__meta_title}>Jane Doe</h3>
              <p className={s.card__meta_text}>Vice President</p>
            </div>
          </li>
          <li className={s.team__item}>
            <div className={s.team__card}>
              <picture>
                <source
                  srcSet={`${image.person3Jpg}1x, ${image.person3Jpg2x} 2x`}
                />
                <source
                  srcSet={`${image.person3Webp}1x, ${image.person3Webp2x} 2x`}
                />
                <img
                  className={s.team__img}
                  src={image.person3Jpg}
                  alt="foto Steve Smith"
                />
              </picture>
              <div className={s.list__wrapper}>
                <ul className={s.social__list}>
                  <li className={s.social__item}>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={35}
                        height={35}
                      >
                        <use href={`${icon}#facebook`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={35}
                        height={33}
                      >
                        <use href={`${icon}#twitter`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        width={40}
                        height={31}
                      >
                        <use href={`${icon}#youtube`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.social__item}>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={s.social__item_icon}
                        style={{ width: "35px", height: "39px" }}
                      >
                        <use href={`${icon}#linkedin`}></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.card__meta}>
              <h3 className={s.card__meta_title}>Steve Smith</h3>
              <p className={s.card__meta_text}>Marketing Head</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
