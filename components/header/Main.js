import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Main = () => {
  const cart = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link className={styles.logo} href="/">
          <img src="../../../ebay.png"></img>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search...." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link className={styles.cart} href="/cart">
          <FaOpencart />
          <span>0</span>
        </Link>
      </div>
    </div>
  );
};

export default Main;
