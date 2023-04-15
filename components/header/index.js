import React from "react";
import styles from "./styles.module.scss";
import Ad from "./Ad";
import Top from "./Top";

const header = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
    </header>
  );
};

export default header;
