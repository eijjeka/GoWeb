import { FormContact } from "components/FormContact";
import { images } from "./imgExports";
import s from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={s.contact} id="contact">
      <picture>
        <source srcSet={`${images.contactJpg} 1x, ${images.contactJpg2x} 2x`} />
        <source
          srcSet={`${images.contactWebp} 1x, ${images.contactWebpp2x} 2x`}
        />
        <img
          className={s.contact__img}
          src={images.contactJpg}
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
