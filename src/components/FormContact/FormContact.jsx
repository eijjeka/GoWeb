import { Formik, Form, Field, ErrorMessage } from "formik";
import { Error } from "components/Error";
import s from "./FormContact.module.scss";

export const FormContact = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "This is required field";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // }, 400);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form} action="POST" data-netlify="true" netlify>
            <Field
              className={s.form__input}
              type="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" />
            <Field
              className={s.form__input}
              type="email"
              name="email"
              placeholder="Enter email*"
            />
            <ErrorMessage name="email" component={Error} />
            <button className={s.form__button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
