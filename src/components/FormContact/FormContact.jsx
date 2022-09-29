import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Error } from "components/Error";
import s from "./FormContact.module.scss";
import ModalForm from "components/ModalForm/ModalForm";

export const FormContact = () => {
  const [openModal, setOpenModal] = useState(false);

  const isOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
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
          isOpen();
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
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

      {openModal && <ModalForm onClose={isOpen} />}
    </div>
  );
};
