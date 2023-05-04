import * as React from "react";
import { Formik, Field, Form } from "formik";
import { AuthenticationContext } from "../../context/authentication";

const LoginForm = () => {
  const authContext = React.useContext(AuthenticationContext);
  const [message, setMessage] = React.useState(null);
  return (
    <div>
      <h1>Sign Up</h1>
      {message && <p>{message}</p>}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          setMessage("Form submitted successfully");
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
