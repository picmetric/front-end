import React from "react";
import { withFormik, Form, Field } from "formik";

function InfoForm() {
  return (
    <Form>
      <Field className="field" type="text" name="email" placeholder="Email" />
      <br />
      <Field className="field" type="text" name="username" placeholder="Username" />
      <br />
      <Field className="field" type="password" name="password" placeholder="Password" />
      <br />
      <button type="submit">Submit!</button>
    </Form>
  );
}

const FormikForm = withFormik({
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
})(InfoForm);

export default FormikForm;
