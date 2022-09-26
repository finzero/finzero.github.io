import React from 'react';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = (props: any) => {
  return (
    <div>
      <input
        type="checkbox"
        className={styles.toggle_checkbox}
        id={styles.toggle_checkbox}
        onChange={props.onChange}
      />

      <label className={styles.toggleLabel} htmlFor={styles.toggle_checkbox}>
        <div className={styles.starContainer}>
          <div className={`${styles.star} ${styles.star1}`}>★</div>
          <div className={`${styles.star} ${styles.star2}`}>★</div>
        </div>
        <div className={styles.moon}></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
