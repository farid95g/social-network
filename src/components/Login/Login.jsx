import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from "./Login.module.css";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          type="email"
          name="email"
          placeholder="Email"
          validate={[ required ]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type="password"
          name="password"
          placeholder="Password"
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
  const onSubmit = ({ email, password, rememberMe = false }) => {
    props.login(email, password, rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);