import icon from "images/symbol-defs.svg";
import s from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.hero} id="home">
      <div className={s.hero__container}>
        <h1 className={s.hero__title}>The Sky Is The Limit</h1>
        <p className={s.hero__preTitle}>
          We provide world class financial assistance
        </p>
        <button className={s.hero__button}>
          <svg className={s.icon} width={9} height={15}>
            <use href={`${icon}#arrow-right`}></use>
          </svg>
          Read More
        </button>
      </div>
    </section>
  );
};
