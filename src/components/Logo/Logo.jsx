import icon from "images/symbol-defs.svg";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <svg width={39} height={35}>
        <use href={`${icon}#logo`}></use>
      </svg>
      Finance
      <span className={s.logoText}>Ledger</span>
    </a>
  );
};
