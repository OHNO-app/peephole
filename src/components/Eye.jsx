import React from 'react';
import styles from '../styles/Eyes.module.css';

const Eye = ({ pupilPosition }) => {
  return (
    <div className={styles.eye}>
      <div 
        className={styles.pupil}
        style={{
          transform: `translate(${pupilPosition.x}%, ${pupilPosition.y}%)`
        }}
      ></div>
      <div className={`${styles.eyelid} ${styles['upper-lid']}`}></div>
      <div className={`${styles.eyelid} ${styles['lower-lid']}`}></div>
    </div>
  );
};

export default Eye;
