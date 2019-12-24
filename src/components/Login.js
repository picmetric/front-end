import React from "react";
import { withFormik, Form, Field } from "formik";

function LoginForm() {
  return (
    <Form>
      <Field type="text" name="email" placeholder="Email" />
      <br />
      <Field type="text" name="username" placeholder="Username" />
      <br />
      <Field type="password" name="password" placeholder="Password" />
      <br />
      <button type="submit">Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, username, password }) {
    return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(LoginForm);

export default FormikLoginForm;
