import React, { useState, useEffect } from 'react';
import Eye from './Eye';
import styles from '../styles/Eyes.module.css';

const Peephole = () => {
  const [containerPosition, setContainerPosition] = useState(0);
  const [pupilPosition, setPupilPosition] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const moveEyes = () => {
      const newX = Math.random() * 40 - 20; // Random value between -20 and 20
      setContainerPosition(newX);
      
      // Pupil moves more extremely than the container
      const pupilX = -50 + (Math.random() * 30 - 15);
      const pupilY = -50 + (Math.random() * 10 - 5);
      setPupilPosition({ x: pupilX, y: pupilY });
    };

    const getRandomInterval = () => {
      return 1000 + Math.random() * 1000; // Random time between 1 and 2 seconds
    };

    const scheduleNextMove = () => {
      moveEyes();
      setTimeout(scheduleNextMove, getRandomInterval());
    };

    const timeoutId = setTimeout(scheduleNextMove, getRandomInterval());
    return () => clearTimeout(timeoutId);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.peephole}>
      <div className={styles.cover}></div>
      <div 
        className={styles['eyes-container']}
        style={{
          transform: `translateX(${containerPosition}px)`,
          transition: 'transform 1s ease-in-out'
        }}
      >
        <Eye pupilPosition={pupilPosition} />
        <Eye pupilPosition={pupilPosition} />
      </div>
    </div>
  );
};

export default Peephole;
