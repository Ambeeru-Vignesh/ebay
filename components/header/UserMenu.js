import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to ebay!</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://www.clipartmax.com/png/middle/194-1941988_circle-profile-by-pdogkasper-cartoon.png"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome, Back!</span>
            <h3>Hanuman</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
