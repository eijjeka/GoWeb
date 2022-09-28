import smallWebp from "images/home/people.webp";
import largeWebp from "images/home/people@2x.webp";
import smallJpg from "images/home/people.jpg";
import largeJpg from "images/home/people@2x.jpg";
import s from "./About.module.scss";

export const About = () => {
  return (
    <section className={s.about} id="about">
      <picture>
        <source srcSet={`${smallWebp} 1x, ${largeWebp} 2x`} />
        <source srcSet={`${smallJpg} 1x, ${largeJpg} 2x`} />
        <img className={s.aboutImg} src={largeJpg} alt="people" />
      </picture>
      <div className={s.meta}>
        <p className={s.metaPreTitle}>What you are looking for</p>
        <h2 className={s.metaTitle}>We provide bespoke solutions</h2>
        <p className={s.metaText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.metaButton} type="button">
          Read More
        </button>
      </div>
    </section>
  );
};
