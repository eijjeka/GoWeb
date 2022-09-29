import icon from "images/symbol-defs.svg";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <svg className={s.logo__icon} width={39} height={35}>
        <use href={`${icon}#logo`}></use>
      </svg>
      Finance
      <span className={s.logo__text}>Ledger</span>
    </a>
  );
};
