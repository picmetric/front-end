import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function InfoForm({ errors, touched }) {
  //add validation for fields availability
  //add loading state functionality
  // Need to figure out why form doesn't clear after submit

  return (
    <Form>
      <div className="fieldcontainer">
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          className="field"
          type="text"
          name="email"
          placeholder="Email@domain.com"
        />
      </div>
      <div className="fieldcontainer">
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field
          className="field"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div className="fieldcontainer">  
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field
          className="field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
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

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    username: Yup.string()
      .min(6)
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(InfoForm);

export default FormikForm;
