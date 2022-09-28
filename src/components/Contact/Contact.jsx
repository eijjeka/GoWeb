import { FormContact } from "components/FormContact";
import * as imgExports from "./imgExports";
import s from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={s.contact} id="contact">
      <picture>
        <source
          srcSet={`${imgExports.image.contactJpg}1x, ${imgExports.image.contactJpg2x} 2x`}
        />
        <source
          srcSet={`${imgExports.image.contactWebp}1x, ${imgExports.image.contactWebpp2x} 2x`}
        />
        <img
          className={s.contact__img}
          src={imgExports.image.contactJpg}
          alt="man working on the laptop"
        />
      </picture>
      <div className={s.contact__wrapper}>
        <h2 className={s.contact__title}>Request Callback</h2>
        <FormContact />
      </div>
    </section>
  );
};
