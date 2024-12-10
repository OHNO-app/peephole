import React from 'react';
import styles from '../styles/Eyes.module.css';

const Eye = ({ pupilPosition, isBlinking }) => {
  return (
    <div className={styles.eye}>
      <div 
        className={styles.pupil}
        style={{
          transform: `translate(${pupilPosition.x}%, ${pupilPosition.y}%)`
        }}
      ></div>
      <div className={`${styles.eyelid} ${styles['upper-lid']} ${isBlinking ? styles.blink : ''}`}></div>
      <div className={`${styles.eyelid} ${styles['lower-lid']} ${isBlinking ? styles.blink : ''}`}></div>
    </div>
  );
};

export default Eye;
