import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.ErrorMessage}>
      Oppss.. Beklenmedik bir hata oluştu.
    </div>
  );
};

export default Error;
