import icon from "images/symbol-defs.svg";
import s from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.hero} id="home">
      <div className={s.heroContainer}>
        <h1 className={s.heroTitle}>The Sky Is The Limit</h1>
        <p className={s.heroPreTitle}>
          We provide world class financial assistance
        </p>
        <button className={s.heroButton}>
          <svg className={s.icon} width={9} height={15}>
            <use href={`${icon}#arrow-right`}></use>
          </svg>
          Read More
        </button>
      </div>
    </section>
  );
};
