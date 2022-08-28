import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import styles from "./Login.module.css";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const LoginForm = ({ handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [ required ], Input, {type: "email"}, "")}
      {createField("Password", "password", [ required ], Input, {type: "password"}, "")}
      {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
      {
        error && <div className={styles.formSummaryError}>{ error }</div>
      }
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