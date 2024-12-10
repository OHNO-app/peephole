import React from 'react';
import Eye from './Eye';
import styles from '../styles/Eyes.module.css';

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