import { useState, useEffect } from "react";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../../components/NavBar/NavBar";
import s from "./Header.module.scss";

export const Header = () => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      setWidth(window.innerWidth);
    };
  }, []);

  return (
    <header
      className={
        (width < 768 && offset >= 120) || (width > 768 && offset >= 70)
          ? `${s.fixed}`
          : `${s.header}`
      }
    >
      <div className={s.header__wrapper}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};
