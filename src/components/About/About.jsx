import { images } from "./imgExports";
import s from "./About.module.scss";

export const About = () => {
  return (
    <section className={s.about} id="about">
      <picture>
        <source srcSet={`${images.smallWebp} 1x, ${images.largeWebp} 2x`} />
        <source srcSet={`${images.smallJpg} 1x, ${images.largeJpg} 2x`} />
        <img className={s.about__img} src={images.largeJpg} alt="people" />
      </picture>
      <div className={s.meta}>
        <p className={s.meta__preTitle}>What you are looking for</p>
        <h2 className={s.meta__title}>We provide bespoke solutions</h2>
        <p className={s.meta__text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.meta__button} type="button">
          Read More
        </button>
      </div>
    </section>
  );
};
