import React from 'react';
import Eye from './Eye';
import styles from '../styles/Eyes.module.css';

// Add a layer over the eyes, so that only the bottom half is visible. AI!
const Peephole = () => {
  return (
    <div className={styles.peephole}>
      <div className={styles['eyes-container']}>
        <Eye />
        <Eye />
      </div>
    </div>
  );
};

export default Peephole;
