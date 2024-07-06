import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import singnUpValidation from "./src/singnUpValidation";
import { HeroPage } from "./src/HeroPage";
const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUpPage = () => {
  const { handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: singnUpValidation,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });

  //   console.log(resetForm);

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={singnUpValidation}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="small" />
            <br />

            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="small" />
            <br />

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="small" />
            <br />

            <label htmlFor="password">Confirm Password</label>
            <Field
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="confirm_password" component="small" />
            <br />
            <button type="submit">Sign Up</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUpPage;
