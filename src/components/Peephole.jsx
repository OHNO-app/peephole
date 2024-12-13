import React, { useState, useEffect } from 'react';
import Eye from './Eye';
import styles from '../styles/Eyes.module.css';

const BLINK_DURATION = 150; // 150ms for the blink

const Peephole = () => {
  const [containerPosition, setContainerPosition] = useState(0);
  const [pupilPosition, setPupilPosition] = useState({ x: -50, y: -50 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const moveEyes = () => {
      const newX = Math.random() * 80 - 40; // Random value between -40 and 40
      setContainerPosition(newX);

      // Pupil moves within constraints of the eye
      const pupilX = -50 + (Math.random() * 60 - 30); // Range of -80 to -20 (still within eye)
      const pupilY = -50 + (Math.random() * 20 - 10); // Slightly more vertical movement
      setPupilPosition({ x: pupilX, y: pupilY });
    };

    const getRandomInterval = () => {
      return 1000 + Math.random() * 1000; // Random time between 1 and 2 seconds
    };

    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), BLINK_DURATION);
    };

    const scheduleNextMove = () => {
      moveEyes();
      // Only 5% chance to blink after movement
      if (Math.random() < 0.05) {
        setTimeout(blink, 1000);
      }
      setTimeout(scheduleNextMove, getRandomInterval());
    };

    // Additional random blinks every 8-12 seconds
    const randomBlink = () => {
      if (Math.random() < 0.15) { // 15% chance to actually blink
        blink();
      }
      setTimeout(randomBlink, 8000 + Math.random() * 4000);
    };

    setTimeout(randomBlink, 8000); // Start random blink cycle

    const timeoutId = setTimeout(scheduleNextMove, getRandomInterval());
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.peephole}>
      <img src="/hole.svg" className={styles['hole-svg']} alt="" aria-hidden="true" />
      <svg className={styles.cover} viewBox="0 0 300 75">
        <rect width="100%" height="100%" />
      </svg>
      <div
        className={styles['eyes-container']}
        style={{
          transform: `translateX(${containerPosition}px)`,
          transition: 'transform 1s ease-in-out'
        }}
      >
        <Eye pupilPosition={pupilPosition} isBlinking={isBlinking} />
        <Eye pupilPosition={pupilPosition} isBlinking={isBlinking} />
      </div>
    </div>
  );
};

export default Peephole;
