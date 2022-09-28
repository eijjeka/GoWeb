import s from "./Footer.module.scss";
import icon from "images/symbol-defs.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.social__list}>
        <li className={s.social__item}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={s.social__item_icon} width={35} height={35}>
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
            <svg className={s.social__item_icon} width={35} height={33}>
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
            <svg className={s.social__item_icon} width={35} height={31}>
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
      <p className={s.copy}>Copyright &copy; 2021 - FinanceLedger</p>
    </footer>
  );
};
