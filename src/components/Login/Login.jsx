import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from "./Login.module.css";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          type="text"
          name="username"
          placeholder="username"
          validate={[ required ]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type="password"
          name="password"
          placeholder="password"
          validate={[ required ]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type="checkbox"
          name="rememberMe"
        />Remember me
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