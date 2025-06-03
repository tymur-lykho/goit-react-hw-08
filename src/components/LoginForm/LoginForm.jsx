import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  email: Yup.string().email("Невірний email").required("Обов'язково"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов'язково"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("Login attempt:", values);
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className={clsx(css.input, {
                [css.invalid]: touched.email && errors.email,
              })}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className={clsx(css.input, {
                [css.invalid]: touched.password && errors.password,
              })}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <button
            type="submit"
            className={css.submitBtn}
            disabled={isSubmitting}
          >
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};
