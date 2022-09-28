import s from "./Error.module.scss";
import errorImg from "images/form/warning.svg";

export const Error = ({ children }) => {
  return (
    <div className={s.error}>
      <img className={s.error__icon} src={errorImg} alt="Error icon" />
      {children}
    </div>
  );
};
