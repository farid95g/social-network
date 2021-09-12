import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="input" type="text" name="username" placeholder="username" />
      </div>
      <div>
        <Field component="input" type="password" name="password" placeholder="password" />
      </div>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" />
        Remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;