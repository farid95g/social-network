import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta, children, element, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError && styles.error)}>
      <div>
        <element {...input} {...props}></element>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <FormControl {...props} element="textarea"></FormControl>
  );
};

export const Input = (props) => {
  return (
    <FormControl {...props} element="input"></FormControl>
  );
};
