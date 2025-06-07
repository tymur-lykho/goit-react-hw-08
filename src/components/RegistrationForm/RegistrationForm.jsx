import { Formik, Field, Form, ErrorMessage } from "formik";

import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Minimum 3 symbols").required("Required"),
  email: Yup.string().email("Not valid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 symbols").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    action.resetForm();
  };
  return (
    <div>
      <h1>Regitration</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Enter your name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="your.mail@mail.com"
              type="email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="password2">Password confirmation</label>
            <Field
              id="password2"
              name="password2"
              type="password"
              className={css.input}
            />
            <ErrorMessage
              name="password2"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
