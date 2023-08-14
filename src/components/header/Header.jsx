import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <Link to="/">Sale</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/card">Card</Link>
        <Link to="/main">MainPageDevelop</Link>
      </div>
      <div className={styles.headerLogo}>Logo</div>
      <div className={styles.headerMenuBar}>
        <div className={styles.headerSearch}>
          <input></input>
          <span className="material-symbols-outlined">search</span>
        </div>
        <Link to="">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <Link to="/login">
          <span className="material-symbols-outlined">person</span>
        </Link>
        <Link to="">
          <div className={styles.headerLang}>
            <span className="material-symbols-outlined">language</span>
            <span>Eng</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export {Header};
