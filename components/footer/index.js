import React from "react";
import Links from "./Links";
import styles from "./styles.module.scss";
import Socials from "./Socials";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__component}>
        <Links />
        <Socials />
        <Newsletter />
        <Copyright />
      </div>
    </footer>
  );
};

export default footer;
