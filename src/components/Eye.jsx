import React from 'react';
import styles from '../styles/Eyes.module.css';

const Eye = () => {
  return (
    <div className={styles.eye}>
      <div className={styles.pupil}></div>
      <div className={`${styles.eyelid} ${styles['upper-lid']}`}></div>
      <div className={`${styles.eyelid} ${styles['lower-lid']}`}></div>
    </div>
  );
};

export default Eye;