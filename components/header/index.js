import React from "react";
import styles from "./styles.module.scss";
import Ad from "./Ad";
import Top from "./Top";
import Main from "./Main";

const header = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
      <Main />
    </header>
  );
};

export default header;
