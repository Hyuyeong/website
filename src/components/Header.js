//import {useState} from 'react'
import styles from './Header.module.scss';

const Header = ({}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_box}>
        <img src="img/logo-white.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>Outdoors</span>
          <span className={styles.heading_primary_sub}>
            is where life happens
          </span>
        </h1>
        <a
          href="#"
          className={`${styles.button} ${styles.button_white} ${styles.button_animation}`}
        >
          Discouver our tours
        </a>
      </div>
    </div>
  );
};
export default Header;
