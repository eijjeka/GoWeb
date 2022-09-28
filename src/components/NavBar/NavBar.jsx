import s from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__list}>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="#home">
            Home
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="#about">
            About
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="#cases">
            Cases
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="#blog">
            Blog
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
