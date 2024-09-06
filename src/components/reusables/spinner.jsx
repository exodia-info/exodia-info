// LoadingSpinner.js
import React from "react";
import styles from "./spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};
